import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DateInput = ({ id, currentDate, onDateChange, onFocusChange, focused }) => (
  <SingleDatePicker
    date={currentDate} // momentPropTypes.momentObj or null
    onDateChange={onDateChange} // PropTypes.func.isRequired
    focused={focused} // PropTypes.bool
    onFocusChange={onFocusChange} // PropTypes.func.isRequired
    id={id} // PropTypes.string.isRequired,
    withPortal
  />
);

export default DateInput;
