import React, { Component, Fragment } from 'react';
import Header from 'Components/Header';
import { Grid, Stepper, Step, StepLabel, Button } from 'material-ui';
import { connect } from 'react-redux';
import qs from 'query-string';
import { SectionContainer, CustomStepLabel, StepContent } from './style';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { updateUserInfo, reduceTourSpace, saveBookingInfo } from '../../actions';

class Booking extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    this.query = qs.parse(location.search);
  }

  state = {
    activeStep: 0,
    steps: ['Confirma tus datos', 'Pago', 'Informaciones finales'],
    currentTour: {}
  };

  componentDidMount() {
    const { match } = this.props;
    if (!this.query.a) {
      this.props.history.push(`/tours/${match.params.id}`);
    }
    this.getCurrentTour();
    this.validIdCheck();
  }

  componentDidUpdate() {
    this.getCurrentTour();
    this.validIdCheck();
  }

  validIdCheck = (id) => {
    if (this.props.tours && this.props.tours.filter((val) => val.id === this.props.match.params.id).length === 0 && this.props.toursRequest === 'READY' && !this.state.currentTour.id) {
      this.props.history.push('/');
    }
  }

  getCurrentTour = () => {
    if (this.props.toursRequest === 'READY' && !this.state.currentTour.id) {
      this.setState({
        currentTour: this.props.tours.filter((val) => val.id === this.props.match.params.id)[0] || {}
      });
    }
  }

  getTotalPrice = () => {
    if (this.query.c) {
      return (
        (this.query.a * this.state.currentTour.adultPrice) + (this.query.c * this.state.currentTour.childPrice)
      );
    }
    return (
      (this.query.a * this.state.currentTour.adultPrice)
    );
  }

  getCurrentContent = (step) => {
    const { activeStep, steps, currentTour } = this.state;
    switch (step) {
      case 0:
        return (
          <StepOne
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            activeStep={activeStep}
            steps={steps}
            user={this.props.user}
            updateUser={this.props.updateUser}
          />);
      case 1:
        return (
          <StepTwo
            adults={this.query && this.query.a}
            childs={this.query && this.query.c}
            childPrice={currentTour.childPrice}
            adultPrice={currentTour.adultPrice}
            total={this.getTotalPrice()}
            handleNext={this.handleNext}
            onAuthorize={this.onAuthorizePayment}
          />
        );
      case 2:
        return (
          <StepThree
            currentTour={currentTour}
          />
        )
      default:
        return (
          <StepOne
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            activeStep={activeStep}
            steps={steps}
          />);
    }
  }

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  onAuthorizePayment = (data) => {
    const { payerID, paymentID } = data;
    const bookingObject = {
      payerID,
      paymentID,
      tourId: this.state.currentTour.id,
      adults: this.query.a,
      childs: this.query.c,
      amount: this.getTotalPrice()
    };
    this.props.reduceTourSpace(this.props.match.params.id);
    this.props.saveBooking(bookingObject);
    this.handleNext();
  }

  render() {
    const { activeStep, steps } = this.state;
    return (
      <Fragment>
        <Header fixed />
        <SectionContainer>
          <Grid container justify="center">
            <Grid item xs={12} md={9}>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  const props = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...props}>
                      <CustomStepLabel {...labelProps}>
                        {label}
                      </CustomStepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <h1>
                      All steps completed - you&quot;re finished
                    </h1>
                  </div>
                ) : (
                  <div>
                    <StepContent>
                      {this.getCurrentContent(activeStep)}
                    </StepContent>
                    {activeStep === 1 &&
                    <div style={{ marginTop: '2rem' }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        variant="raised"
                      >
                        Back
                      </Button>
                      <Button
                        disabled={activeStep === 1}
                        color="primary"
                        variant="raised"
                        onClick={this.handleNext}
                        style={{ marginLeft: '2rem' }}
                      >
                        Next
                      </Button>
                    </div>
                    }
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </SectionContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  tours: state.tours.data,
  toursRequest: state.tours.status
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUserInfo(user)),
  reduceTourSpace: (id) => dispatch(reduceTourSpace(id)),
  saveBooking: (bookingObj) => dispatch(saveBookingInfo(bookingObj))
});


export default connect(mapStateToProps, mapDispatchToProps)(Booking);
