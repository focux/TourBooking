import React from 'react';
import { Typography, Grid } from 'material-ui';
import TourCard from 'Components/TourCard';
import {
  SectionContainer
} from './style';

const SecondSection = () => (
  <SectionContainer>
    <Grid container alignItems="center" justify="center" direction="column" spacing={40}>
      <Grid item sm={12}>
        <Typography variant="display3" align="center">
          Explore Dominican Republic
        </Typography>
      </Grid>
      <Grid container item sm={12} justify="center" spacing={40}>
        <Grid item sm={4}>
          <TourCard
            image="https://quetzalexcursions.com/wp-content/uploads/2016/11/quetzal-cata-excursions-bayahibe-04-720x720.jpg"
            imageTitle="Playa Dominicus"
            location="Bayahibe, La Altagracia"
            departingTime={3}
            title="Excursion para Playa Dominicus"
            price={50}
            spaces={2}
            difficult="Easy"
          />
        </Grid>
        <Grid item sm={4}>
          <TourCard
            image="https://media-cdn.tripadvisor.com/media/photo-s/0a/a0/65/d8/laguna-dudu-or-blue-lagoon.jpg"
            imageTitle="Laguna Dudu"
            location="Laguna Dudu, Cabrera"
            departingTime={3}
            title="Laguna Dudu"
            price={50}
            spaces={2}
            difficult="Easy"
          />
        </Grid>
        <Grid item sm={4}>
          <TourCard
            image="https://uncommoncarib-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/atop-the-Caribbean-on-Pico-Duarte-Dominican-Republic-2048x1152.jpg"
            imageTitle="Pico Duarte"
            location="Pico Duarte, Manabao"
            departingTime={3}
            title="Viaje al Pico Duarte"
            price={50}
            spaces={2}
            difficult="Hard"
          />
        </Grid>
      </Grid>
    </Grid>
  </SectionContainer>
);

export default SecondSection;
