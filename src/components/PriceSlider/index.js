import React from 'react';
import { StyledRheostat } from './style';
import '../../../node_modules/rheostat/css/slider.css';
import '../../../node_modules/rheostat/css/slider-horizontal.css';
import '../../../node_modules/rheostat/css/slider-vertical.css';

const PriceSlider = ({ startPrice, setStartPrice, onChangeTempPrice }) => (
  <div style={{ width: '100%' }}>
    <StyledRheostat
      min={200}
      max={10000}
      values={[startPrice]}
      onChange={setStartPrice}
      onValuesUpdated={onChangeTempPrice}
    />
  </div>
);

export default PriceSlider;
