import React from 'react';
import { formatPrice, displayMonthDayDate } from '../../utils';
import { Card, CardHeader, HeaderCloud, CardBottom, CardTitle, CardSubtitle, CardFooter, FooterText, FooterSmallText } from './style';

const TourCard = ({ id, image, imageTitle, location, title, adultPrice, spaces, difficult, departingDate, onClick }) => (
  <Card style={{ cursor: 'pointer' }} onClick={onClick}>
    <CardHeader image={image}>
      <HeaderCloud />
    </CardHeader>
    <CardBottom>
      <CardTitle>
        {title}
      </CardTitle>
      <CardSubtitle>
        {location} | {displayMonthDayDate(departingDate)}
      </CardSubtitle>
      <CardFooter>
        <FooterText fontSize="26px"><FooterSmallText>RD$</FooterSmallText>{formatPrice(adultPrice)}</FooterText>
        <FooterText fontSize="26px">{spaces}<FooterSmallText>CUPOS</FooterSmallText></FooterText>
      </CardFooter>
    </CardBottom>
  </Card>
);

export default TourCard;
