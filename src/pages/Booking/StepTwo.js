import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper} from 'material-ui';
import { StepContentTitle, CustomTableCell, CustomTableRow } from './style';

const StepTwo = () => (
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
                <CustomTableCell numeric>1</CustomTableCell>
                <CustomTableCell numeric>1290</CustomTableCell>
              </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </Fragment>
);

export default StepTwo;
