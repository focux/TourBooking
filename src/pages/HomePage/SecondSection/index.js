import React from 'react';
import { Grid, CircularProgress } from 'material-ui';
import TourCardList from 'Components/TourCardList';
import Heading from 'Components/Heading';
import { connect } from 'react-redux';
import CatCard from 'Components/CatCard';
import { Rowing, Explore } from '@material-ui/icons';
import {
  SectionContainer
} from './style';

const SecondSection = ({ tours, toursRequest }) => (
  <SectionContainer>
    <Grid container alignItems="center" justify="center" direction="column" spacing={40}>
      <Grid item sm={12}>
        <Heading>
          Explore Dominican Republic
        </Heading>
      </Grid>
      <Grid container alignItems="center" justify="center" direction="row" spacing={24} style={{padding: '0 2rem 2rem 2rem'}}>
        <Grid item xs={6}>
          <CatCard icon={<Explore />} url="/search" title="Ecotourism" image="https://s22.postimg.cc/6rb7ivs75/salto_el_limon_002-xl-1800x1200.jpg" />
        </Grid>
        <Grid item xs={6}>
          <CatCard icon={<Rowing />} url="/search" title="Experiences" image="https://s22.postimg.cc/4y3pgz9yp/Buggies-_Punta-_Cana-3.jpg" />
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} style={{padding: '0 2rem 2rem 2rem'}}>
        <TourCardList tours={tours} toursRequest={toursRequest} />
      </Grid>
      </Grid>
    </Grid>
  </SectionContainer>
);

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(SecondSection);
