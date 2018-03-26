import React from 'react';
import { Container, PlaceName } from './style';

const HeroContainer = props => (
  <Container image="images/bighero.jpg">
    <PlaceName>{props.place}</PlaceName>
  </Container>
);

export default HeroContainer;
