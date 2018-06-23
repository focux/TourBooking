import React from 'react';
import { formatPrice, displayMonthDayDate } from '../../utils';
import { Card, CardHeader, HeaderCloud, CardBottom, CardTitle, CardSubtitle, CardFooter, FooterText, FooterSmallText, CardBookingPrice } from './style';

const TourCard = ({ id, image, imageTitle, location, title, adultPrice, spaces, difficult, departingDate, onClick, bookingPrice }) => (
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
      <CardBookingPrice>Reserva con {formatPrice(bookingPrice, true)}</CardBookingPrice>
    </CardBottom>
  </Card>
);

export default TourCard;
