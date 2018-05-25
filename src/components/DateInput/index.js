import React from 'react';
import { Grid } from 'material-ui';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';

const DateInput = ({ id, currentDate, onDateChange, onFocusChange, focused }) => (
  <Grid container justify="center">
  <SingleDatePicker
    date={currentDate} // momentPropTypes.momentObj or null
    onDateChange={onDateChange} // PropTypes.func.isRequired
    focused={focused} // PropTypes.bool
    onFocusChange={onFocusChange} // PropTypes.func.isRequired
    id={id} // PropTypes.string.isRequired,
    displayFormat="DD/MM/YYYY"
    withPortal
    noBorder
  />
  </Grid>
);

export default DateInput;
