import React from 'react';
import { connect } from 'react-redux';
import { formatPrice, displayMonthDayDate } from '../../utils';
import { Card, CardHeader, HeaderCloud, CardBottom, CardTitle, CardSubtitle, CardFooter, FooterText, FooterSmallText, CardBookingPrice, StrikePrice } from './style';

const TourCard = ({ id, image, imageTitle, location, title, adultPrice, spaces, difficult, departingDate, onClick, bookingPrice, dealPrice }) => (
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
      <CardBookingPrice>Reserva con <StrikePrice>RD{formatPrice(bookingPrice, true)}</StrikePrice> RD{formatPrice(dealPrice, true)}</CardBookingPrice>
    </CardBottom>
  </Card>
);

const mapStateToProps = (state) => ({
  dealPrice: state.ui.salePrice
});

export default connect(mapStateToProps)(TourCard);
