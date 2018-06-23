import React, { Fragment } from 'react';
import { Table, TableBody, Grid, TableHead, TableRow, Paper, Checkbox } from 'material-ui';
import { StepContentTitle, CustomTableCell, CustomLabel } from './style';
import PaypalButton from '../../services/Paypal';
import { formatPrice } from '../../utils';

const StepTwo = ({ adults, childs, adultPrice, childPrice, total, handleNext, onAuthorize, handleCompletePayment, completePayment, bookingTotal }) => (
  <Fragment>
    <StepContentTitle>Resumen de la orden</StepContentTitle>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell type="header">Descripción</CustomTableCell>
            <CustomTableCell type="header" numeric>Cantidad</CustomTableCell>
            <CustomTableCell type="header" numeric>Precio</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <CustomTableCell component="th" scope="row">
              Cupo para adulto
            </CustomTableCell>
            <CustomTableCell numeric>{adults}</CustomTableCell>
            <CustomTableCell numeric>RD{formatPrice(adultPrice, true)}</CustomTableCell>
          </TableRow>
          {childs &&
          <TableRow>
            <CustomTableCell component="th" scope="row">
              Cupo para niños
            </CustomTableCell>
            <CustomTableCell numeric>{childs}</CustomTableCell>
            <CustomTableCell numeric>RD{formatPrice(childPrice, true)}</CustomTableCell>
          </TableRow>
        }
          <TableRow>
            <CustomTableCell component="th" scope="row">
              Total
            </CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric>RD{formatPrice(total, true)}</CustomTableCell>
          </TableRow>
          <TableRow>
            <CustomTableCell component="th" scope="row">
              Monto a pagar
            </CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric>RD{completePayment ? formatPrice(total, true) : formatPrice(bookingTotal, true)}</CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <StepContentTitle style={{ marginTop: '4rem' }}>Opciones de pago</StepContentTitle>
    <Grid container justify="flex-start" alignItems="center">
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Checkbox
            name="complete-payment"
            checked={completePayment}
            onChange={handleCompletePayment}
            value="completepayment"
          />
          <CustomLabel>¿Deseas pagar el monto completo?</CustomLabel>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={4}>
      <PaypalButton onAuthorize={onAuthorize} amount={completePayment ? (total / 49.43) : (bookingTotal / 49.43)} />
    </Grid>
  </Fragment>
);

export default StepTwo;
