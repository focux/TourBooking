import React from 'react';
import { Button, Grid } from 'material-ui';

const IncrementInput = ({ value, onIncrease, onDecrease, maxValue, minValue = 1 }) => (
  <Grid container justify="space-around" alignItems="center">
    <Button
      variant="fab"
      color="primary"
      aria-label="increase"
      onClick={value < maxValue ? onIncrease : () => {}}
      mini
    >
      +
    </Button>
    <span style={{ fontSize: '2rem' }}>{value}</span>
    <Button
      variant="fab"
      color="primary"
      aria-label="decrease"
      onClick={value > minValue ? onDecrease : () => {}}
      mini
    >
      -
    </Button>
  </Grid>
);

export default IncrementInput;
