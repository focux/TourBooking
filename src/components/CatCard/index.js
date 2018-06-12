import React from 'react';
import { Container, Title, TextContainer } from './style.js';

const CatCard = ({ image, title }) => (
  <Container href="#" image={image}>
    <TextContainer>
      <Title>{title}</Title>
    </TextContainer>
  </Container>
);

export default CatCard;
