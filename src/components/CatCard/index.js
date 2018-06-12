import React from 'react';
import { Container, Title, TextContainer, IconContainer } from './style.js';

const CatCard = ({ image, title, icon }) => (
  <Container href="#" image={image}>
    <TextContainer>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
    </TextContainer>
  </Container>
);

export default CatCard;
