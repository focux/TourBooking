import React from 'react';
import { Grid } from 'material-ui';
import TourCard from 'Components/TourCard';
import Heading from 'Components/Heading';
import {
  SectionContainer
} from './style';

const SecondSection = () => (
  <SectionContainer>
    <Grid container alignItems="center" justify="center" direction="column" spacing={40}>
      <Grid item sm={12}>
        <Heading>
          Explore Dominican Republic
        </Heading>
      </Grid>
      <Grid container item sm={12} justify="center" spacing={24}>
        <Grid item sm={3}>
          <TourCard
            image="https://i.ytimg.com/vi/APaabbUNEDM/maxresdefault.jpg"
            imageTitle="Playa Dominicus"
            location="Bayahibe, La Romana"
            departingTime={3}
            title="Excursion para Playa Dominicus"
            price={50}
            spaces={2}
            difficult="Easy"
          />
        </Grid>
        <Grid item sm={3}>
          <TourCard
            image="http://coralblanco.com/wp-content/uploads/2014/04/dudu.jpg"
            imageTitle="Laguna Dudu"
            location="Laguna Dudu, Cabrera"
            departingTime={3}
            title="Laguna Dudu"
            price={50}
            spaces={2}
            difficult="Easy"
          />
        </Grid>
        <Grid item sm={3}>
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
        <Grid item sm={3}>
          <TourCard
            image="https://room-online-pro.s3.amazonaws.com/cobi%2Fmedia%2Fwww.sirenishotels.com%2Fcache%2F80%2Fbe%2F80be2b8b571913c7c95ac0b26560c450.jpg"
            imageTitle="Laguna Azul"
            location="Pico Duarte, Manabao"
            departingTime={3}
            title="Laguna Azul"
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
