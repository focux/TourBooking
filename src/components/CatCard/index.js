import React from 'react';
import { Container, Title, TextContainer, IconContainer } from './style.js';

const CatCard = ({ image, title, icon, url }) => (
  <Container href={url} image={image}>
    <TextContainer>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
    </TextContainer>
  </Container>
);

export default CatCard;
