import React from 'react';
import { Typography, Card, CardContent } from 'material-ui';
import { LocationOn, DirectionsBus } from '@material-ui/icons';
import { Location, StyledCardMedia, StyledGrid } from './style';

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
            <StyledGrid item container sm={6} alignItems="center" justify="center" bgColor="primary"><LocationOn style={{fontSize: 'inherit', marginLeft: 5}} />{location}</StyledGrid>
            <StyledGrid item container sm={6} alignItems="center" justify="center"><DirectionsBus style={{fontSize: 'inherit', marginLeft: 5}} />Departing in {departingTime} days</StyledGrid>
          </Location>
          </StyledCardMedia>
        <CardContent>
          <Typography gutterBottom variant="title" component="h2" color="inherit">
            
          </Typography>
          <Typography gutterBottom variant="display1" component="h3" color="primary">
            {title}
          </Typography>
          <Typography variant="title" component="p" color="inherit" style={{ textTransform: 'uppercase' }}>
          ${price} USD • {spaces} Spaces Left • {difficult}
          </Typography>
        </CardContent>
      </Card>
);

export default TourCard;
