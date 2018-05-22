import React from 'react';
import { Grid } from 'material-ui';
import TourCard from 'Components/TourCard';

const TourCardList = ({ tours, sideMode }) => (
  <Grid container item sm={12} justify="flex-start" spacing={24}>
    {tours.map(({
      image,
      location,
      departingTime,
      title,
      price,
      spaces,
      level
    }) => (
      <Grid item xs={sideMode ? 12 : 12} sm={sideMode ? 6 : 6} md={sideMode ? 4 : 4} lg={sideMode ? 4 : 3}>
        <TourCard
          image={image}
          location={location}
          departingTime={departingTime}
          title={title}
          price={price}
          spaces={spaces}
          level={level}
        />
      </Grid>
    ))}
  </Grid>
);

export default TourCardList;
