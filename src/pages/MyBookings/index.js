import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from 'Components/Header';
import Heading from 'Components/Heading';
import CustomModal from 'Components/CustomModal';
import { Table, TableBody, Grid, TableHead, TableRow, Button } from 'material-ui';
import { SectionContainer, SubHeading, CustomTableCell, BigText, PaymentIcon } from './style';
import { formatPrice } from '../../utils';
import { startFetchingBookings, updateBooking } from '../../actions';
import PaypalButton from '../../services/Paypal';
import PaymentService from '../../services/paymentService';

class MyBookings extends Component {
  state = {
    openAuthModal: false,
    chargeAmount: 0,
    bookingId: ''
  }
  componentDidMount() {
    if (this.props.bookingsStatus !== 'READY') {
      this.props.fetchBookings();
    }
  }

  totalPrice = (adultPrice, childPrice, adultSpaces, childSpaces) => {
    if (childSpaces) {
      return (adultPrice * adultSpaces) + (childPrice * childSpaces);
    }
    return (adultPrice * adultSpaces);
  }

  tableCell = (title, total, paid, bookingId, key) => (
    <TableRow key={key}>
      <CustomTableCell component="th" scope="row">
        {title}
      </CustomTableCell>
      <CustomTableCell numeric>RD{formatPrice(total, true)}</CustomTableCell>
      <CustomTableCell numeric>RD{formatPrice(paid, true)}</CustomTableCell>
      <CustomTableCell>{total <= paid ? <Button color="primary" size="large" style={{ fontSize: '1rem', color: 'green' }}>Pagado</Button> : <Button onClick={this.handleOpenModal((total - paid), bookingId)} color="primary" size="large" style={{ fontSize: '1rem', color: 'red' }}>Pagar restante</Button>}</CustomTableCell>
    </TableRow>
  );

  handleCloseModal = () => this.setState({ openAuthModal: false });

  handleOpenModal = (chargeAmount, bookingId) => () => this.setState({ openAuthModal: true, chargeAmount, bookingId });

  paymentModal = () => (
    <CustomModal
      aria-labelledby="payment-modal"
      aria-describedby="Modal for payment"
      open={this.state.openAuthModal}
      onClose={this.handleCloseModal}
    >
      <Grid container justify="center" alignItems="center" spacing={40}>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <PaymentIcon style={{ width: '10rem', height: '10rem', }} />
        </Grid>
        <Grid item xs={12}>
          <BigText>PAGAR {formatPrice(this.state.chargeAmount, true)}</BigText>
        </Grid>
        <Grid item xs={6}>
          <PaypalButton onAuthorize={this.onAuthorizePayment} amount={this.state.chargeAmount / 49.43} />
        </Grid>
        <Grid item xs={12} />
      </Grid>
    </CustomModal>
  );

  onAuthorizePayment = async (data) => {
    const { payerID, paymentID } = data;
    const paymentObject = {
      payerId: payerID,
      paymentId: paymentID,
      amount: this.state.chargeAmount
    };
    const paymentResponse = await PaymentService.savePayment(paymentObject);
    this.props.updtBooking(this.state.bookingId, paymentResponse);
    this.handleCloseModal();
    // this.handleCloseModal();
    // const emailObject = {
    //   title: this.state.currentTour.title,
    //   spaces: this.query.c ? this.query.a + this.query.c : this.query.a,
    //   operator: this.state.currentTour.operator,
    //   departingDate: this.state.currentTour.departingDate,
    //   departingFrom: this.state.currentTour.departingFrom
    // };
    // EmailService.sendOrderConfirmation(emailObject);
    // EmailService.sendBookingNotification();
  }

  render() {
    return (
      <Fragment>
        <Header fixed />
        {this.paymentModal()}
        <SectionContainer>
          <Grid container justify="center" alignItems="center">
            <Grid item container justify="center" xs={12} md={10}>
              <Heading>Mis reservas</Heading>
            </Grid>
            <Grid item xs={12} md={10} style={{ margin: '2rem 0' }}>
              <SubHeading>
                Revisa todos los viajes que haz reservado, así también,
                todo lo concerniente a los pagos pendientes.
              </SubHeading>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={8}>
              {this.props.bookings && this.props.bookings.length > 0 ?
                <Table>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell type="header">Nombre</CustomTableCell>
                      <CustomTableCell type="header" numeric>Monto</CustomTableCell>
                      <CustomTableCell type="header" numeric>Pagado</CustomTableCell>
                      <CustomTableCell type="header">Estado</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.bookings.map((v, k) => {
                      const totalPrice = this.totalPrice(v.tour.adultPrice, v.tour.childPrice, v.adults, v.childs);
                      const amount = v.payment.reduce((prevVal, nextVal) => prevVal + nextVal.amount, 0);
                      return this.tableCell(v.tour.title, totalPrice, amount, v._id, k);
                    })}
                  </TableBody>
                </Table>
              : <BigText>Todavía no has reservado ningún tour.</BigText>}
            </Grid>
          </Grid>
        </SectionContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  bookings: state.bookings.data,
  bookingsStatus: state.bookings.status
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(startFetchingBookings()),
  updtBooking: (id, newPayment) => dispatch(updateBooking(id, newPayment))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBookings);
