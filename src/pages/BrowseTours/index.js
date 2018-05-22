import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, CircularProgress } from 'material-ui';
import { Explore } from '@material-ui/icons';
import TourCardList from 'Components/TourCardList';
import Header from 'Components/Header';
import { SectionContainer, CustomPaper, SectionTitle, PurpleText, BlackGrid } from './style';

const BrowseTours = (props) => (
  <Fragment>
    <Header fixed />
    <SectionContainer>
      <Grid container>
          {
            props.toursRequest === 'READY' ?
            <Grid item xs={9}>
              <Grid container direction="column">
                <BlackGrid container item alignItems="center" xs={6}>
                <Explore style={{ marginRight: 10 }} /><SectionTitle>{props.match && props.match.params && props.match.params.location ? <span>Found <PurpleText>{props.tours && props.tours.length} tours</PurpleText> to {props.match.params.location}</span> : `Browsing ${props.tours && <PurpleText>{props.tours.length}</PurpleText>} tours`}</SectionTitle>
                </BlackGrid>
                <Grid item xs={12}>
                  <TourCardList tours={props.tours} sideMode />
                </Grid>
                </Grid>
              </Grid>
            :
              <CircularProgress color="primary" />
        }
        <Grid item xs={3}>
        <CustomPaper elevation={2}>
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
  </Fragment>
);

const mapStateToProps = state => ({
  tours: state.tours.data,
  toursRequest: state.tours.status
});

export default connect(mapStateToProps)(BrowseTours);
