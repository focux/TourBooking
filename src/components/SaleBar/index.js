import React from 'react';
import { Grid } from 'material-ui';
import { connect } from 'react-redux';
import { formatPrice } from '../../utils';
import { closeSalesBar } from '../../actions';
import { Bar, CloseText, BoldText } from './style';

const SaleBar = ({ handleClose, dealPrice }) => (
  <Bar container justify="center" alignItems="center" id="sale-bar">
    <CloseText onClick={handleClose}>X</CloseText>
    <Grid item xs={10}><BoldText>¡Oferta especial!</BoldText> Reserva tu tour desde RD{formatPrice(dealPrice, true)} por tiempo limitado</Grid>
    <Grid item xs={10}>
      <BoldText>Termina en un día</BoldText>
    </Grid>
  </Bar>
);

const mapStateToProps = (state) => ({
  dealPrice: state.ui.salePrice
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => dispatch(closeSalesBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(SaleBar);
