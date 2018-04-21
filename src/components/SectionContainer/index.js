import React from 'react';
import { Container } from './style';

const SectionContainer = ({ children }) => (
  <Container image="images/bighero.jpg">
    {children}
  </Container>
);

export default SectionContainer;
