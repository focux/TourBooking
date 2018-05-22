import React from 'react';
import { connect } from 'react-redux';
import { Grid, CircularProgress } from 'material-ui';
import TourCardList from 'Components/TourCardList';
import Header from 'Components/Header';
import { SectionContainer, CustomPaper } from './style';

const BrowseTours = (props) => (
  <React.Fragment>
    <Header fixed />
    <SectionContainer>
      <Grid container>
        <Grid item xs={9}>
          <h1>{props.match && props.match.params && props.match.params.location ? `Browsing tours at ${props.match.params.location}` : 'Browsing all the tours'}</h1>
          {
            props.toursRequest === 'READY' ?
              <TourCardList tours={props.tours} sideMode />
            :
              <CircularProgress color="primary" />
        }
        </Grid>
        <Grid item xs={3}>
        <CustomPaper elevation={4}>
          <h1>Other column</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget magna dolor.
          Pellentesque sit amet diam fermentum, molestie odio ac, cursus ligula.
          Duis volutpat varius tortor sed tincidunt. Sed tincidunt est sagittis fringilla efficitur.
          Nunc congue lorem nec eros pretium ultricies. Sed a ante at sapien congue vehicula. Aenean finibus nibh id massa vehicula feugiat.
           Phasellus sapien ipsum, consequat et tincidunt a, euismod non odio. Mauris in tincidunt mi, aliquam iaculis ligula. Donec tellus orci, finibus aliquet tellus lobortis, ultricies ultrices turpis. Duis bibendum lectus et pellentesque feugiat.
          Vestibulum quis gravida sapien, tincidunt rutrum augue.</p>
          </CustomPaper>
        </Grid>
      </Grid>
    </SectionContainer>
  </React.Fragment>
);

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(BrowseTours);
