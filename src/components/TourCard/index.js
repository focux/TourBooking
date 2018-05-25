import React from 'react';
import { formatPrice } from '../../utils';
import { Card, CardHeader, HeaderCloud, CardBottom, CardTitle, CardSubtitle, CardFooter, FooterText, FooterSmallText } from './style';

const TourCard = ({ image, imageTitle, location, title, price, spaces, difficult, departingTime }) => (
  <Card>
    <CardHeader image={image}>
      <HeaderCloud />
    </CardHeader>
    <CardBottom>
      <CardTitle>
        {title}
      </CardTitle>
      <CardSubtitle>
        {location} | Sep 12
      </CardSubtitle>
      <CardFooter>
        <FooterText fontSize="26px"><FooterSmallText>$</FooterSmallText>{formatPrice(price)}</FooterText>
        <FooterText fontSize="26px">{spaces}<FooterSmallText>SPACES</FooterSmallText></FooterText>
      </CardFooter>
    </CardBottom>
  </Card>
);

export default TourCard;
