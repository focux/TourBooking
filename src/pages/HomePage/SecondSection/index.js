import React from 'react';
import { Grid, CircularProgress } from 'material-ui';
import TourCardList from 'Components/TourCardList';
import Heading from 'Components/Heading';
import { connect } from 'react-redux';
import CatCard from 'Components/CatCard';
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
          <CatCard title="Ecotourism" image="http://www.godominicanrepublic.com/wp-content/uploads/2017/12/salto_el_limon_002-xl-1800x1200.jpg" />
        </Grid>
        <Grid item xs={6}>
          <CatCard title="Experiences" image="http://excursionesenpuntacana.com/wp-content/uploads/2015/07/Buggies-Punta-Cana-3.jpg" />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TourCardList tours={tours} toursRequest={toursRequest} />
      </Grid>
    </Grid>
  </SectionContainer>
);

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(SecondSection);
