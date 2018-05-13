import React from 'react';
import { Grid } from 'material-ui';
import TourCard from 'Components/TourCard';

const TourCardList = (tours) => (
  <Grid container item sm={12} justify="center" spacing={24}>
    {tours.map(({
      image,
      location,
      departingTime,
      title,
      prices,
      spaces,
      level
    }) => (
      <Grid item sm={3}>
        <TourCard
          image={image}
          location={location}
          departingTime={departingTime}
          title={title}
          price={prices}
          spaces={spaces}
          level={level}
        />
      </Grid>
    ))}
  </Grid>
);

export default TourCardList;
