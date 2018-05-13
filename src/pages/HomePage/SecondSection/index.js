import React from 'react';
import { Grid } from 'material-ui';
import TourCardList from 'Components/TourCardList';
import Heading from 'Components/Heading';
import { connect } from 'react-redux';
import {
  SectionContainer
} from './style';

const SecondSection = ({ tours }) => (
  <SectionContainer>
    <Grid container alignItems="center" justify="center" direction="column" spacing={40}>
      <Grid item sm={12}>
        <Heading>
          Explore Dominican Republic
        </Heading>
      </Grid>
      <TourCardList tours={tours} />
    </Grid>
  </SectionContainer>
);

const mapStateToProps = state => ({
  tours: state.tours
});

export default connect(mapStateToProps)(SecondSection);
