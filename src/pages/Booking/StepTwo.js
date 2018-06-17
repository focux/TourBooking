import React, { Fragment } from 'react';
import { Table, TableBody, Grid, TableHead, TableRow, Paper} from 'material-ui';
import { StepContentTitle, CustomTableCell, CustomTableRow } from './style';
import PaypalButton from '../../services/Paypal';

const StepTwo = ({ adults, childs, adultPrice, childPrice, total, handleNext }) => (
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
            <CustomTableCell numeric>{adultPrice}</CustomTableCell>
          </TableRow>
          {childs &&
          <TableRow>
            <CustomTableCell component="th" scope="row">
              Cupo para niños
            </CustomTableCell>
            <CustomTableCell numeric>{childs}</CustomTableCell>
            <CustomTableCell numeric>{childPrice}</CustomTableCell>
          </TableRow>
        }
          <TableRow>
            <CustomTableCell component="th" scope="row">
              Total
            </CustomTableCell>
            <CustomTableCell numeric></CustomTableCell>
            <CustomTableCell numeric>{total}</CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <StepContentTitle style={{ marginTop: '4rem' }}>Opciones de pago</StepContentTitle>
    <Grid item xs={4}>
      <PaypalButton onAuthorize={handleNext} />
    </Grid>
  </Fragment>
);

export default StepTwo;
