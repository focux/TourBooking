import React from 'react';
import { Typography, Card, CardContent, Grid } from 'material-ui';
import { LocationOn, DirectionsBus } from '@material-ui/icons';
import { Location, StyledCardMedia, StyledGrid, CardTitle, HoverGrid, StyledCardContent } from './style';

const TourCard = ({ image, imageTitle, location, title, price, spaces, difficult, departingTime }) => (
  <Card>
          <StyledCardMedia
            image={image}
            title={imageTitle}
            style={{
              height: 0,
              paddingTop: '56.25%' // 16:9
            }}
          >
          <Location>
            <StyledGrid item container sm={6} alignItems="center" justify="center" bgColor="primary"><LocationOn style={{fontSize: 'inherit', marginRight: 5}} />{location}</StyledGrid>
            <StyledGrid item container sm={6} alignItems="center" justify="center"><DirectionsBus style={{fontSize: 'inherit', marginRight: 5}} />Departing in {departingTime} days</StyledGrid>
          </Location>
          </StyledCardMedia>
        <StyledCardContent>
          <CardTitle gutterBottom variant="display2" component="h3" color="primary">
            {title}
          </CardTitle>
          <Grid container direction="row">
            <HoverGrid item sm={4}>
              <Typography variant="title" component="p" color="inherit" style={{ textTransform: 'uppercase' }}>
                ${price} USD
              </Typography>
            </HoverGrid>
            <HoverGrid item sm={4}>
              <Typography variant="title" component="p" color="inherit" style={{ textTransform: 'uppercase' }}>
                {spaces} Spaces Left
              </Typography>
            </HoverGrid>
            <HoverGrid item sm={4}>
              <Typography variant="title" component="p" color="inherit" style={{ textTransform: 'uppercase' }}>
                Level: {difficult}
              </Typography>
            </HoverGrid>
          </Grid>
        </StyledCardContent>
      </Card>
);

export default TourCard;
