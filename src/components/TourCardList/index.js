import React from 'react';
import { Grid, CircularProgress } from 'material-ui';
import { withRouter } from 'react-router-dom';
import TourCard from 'Components/TourCard';
import { CustomLink } from './style';

const TourCardList = ({ tours, sideMode, toursRequest, history }) => (
  <Grid container item sm={12} justify="flex-start" spacing={24}>
  {
    toursRequest === 'READY' ?
    tours.map(({
      image,
      location,
      departingTime,
      title,
      price,
      spaces,
      level,
      id
    }, key) => (
      <Grid item xs={sideMode ? 12 : 12} sm={sideMode ? 6 : 6} md={sideMode ? 4 : 4} lg={sideMode ? 4 : 3} key={key}>
        <CustomLink to={`/tours/${id}`}>
        <TourCard
          image={image}
          location={location}
          departingTime={departingTime}
          title={title}
          price={price}
          spaces={spaces}
          level={level}
          
        />
        </CustomLink>
      </Grid>
    ))
    :
    <CircularProgress color="primary" />}
  </Grid>
);

export default withRouter(TourCardList);
