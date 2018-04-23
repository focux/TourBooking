import React from 'react';
import { Typography, Card, CardMedia, CardContent } from 'material-ui';

const TourCard = ({ image, imageTitle, location, title, price, spaces, difficult, departingTime }) => (
  <Card>
          <CardMedia
            image={image}
            title={imageTitle}
            style={{
              height: 0,
              paddingTop: '56.25%' // 16:9
            }}
          />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2" color="inherit">
            {location} • Departing in {departingTime} days
          </Typography>
          <Typography gutterBottom variant="display1" component="h3" color="primary">
            {title}
          </Typography>
          <Typography variant="title" component="p" color="inherit" style={{ textTransform: 'uppercase' }}>
          ${price} USD • {spaces} Spaces Left • {difficult} Difficult
          </Typography>
        </CardContent>
      </Card>
);

export default TourCard;
