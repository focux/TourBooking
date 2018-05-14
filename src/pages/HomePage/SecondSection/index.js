import React from 'react';
import { Grid, CircularProgress } from 'material-ui';
import TourCardList from 'Components/TourCardList';
import Heading from 'Components/Heading';
import { connect } from 'react-redux';
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
      {
        toursRequest === 'READY' ?
          <TourCardList tours={tours} />
        :
          <CircularProgress color="primary" />
    }
    </Grid>
  </SectionContainer>
);

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(SecondSection);
