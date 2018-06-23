import React, { Fragment } from 'react';
import { Grid, CircularProgress } from 'material-ui';
import { withRouter, Link } from 'react-router-dom';
import TourCard from 'Components/TourCard';
import { CustomLink } from './style';

const TourCardList = ({ tours, sideMode, toursRequest, history }) => (
  <Fragment>
  {
    toursRequest === 'READY' ?
    <Grid container item sm={12} justify="flex-start" spacing={24}>
    {tours.map(({
      image,
      location,
      departingDate,
      title,
      adultPrice,
      spaces,
      level,
      bookingPrice,
      id
    }, key) => (
      <Grid item xs={sideMode ? 12 : 12} sm={sideMode ? 6 : 6} md={sideMode ? 4 : 4} lg={sideMode ? 4 : 3} key={key}>
        <CustomLink to={`/tours/${id}`}>
        <TourCard
          image={image}
          location={location}
          departingDate={departingDate}
          title={title}
          adultPrice={adultPrice}
          spaces={spaces}
          level={level}
          bookingPrice={bookingPrice}
        />
        </CustomLink>
      </Grid>
    ))}
    </Grid>
    :
    <Grid container item sm={12} justify="center" spacing={24}>
      <CircularProgress color="primary" />
    </Grid>
  }
  </Fragment>
);

export default withRouter(TourCardList);
