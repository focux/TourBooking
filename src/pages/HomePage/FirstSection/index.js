import React from 'react';
import SearchBar from 'Components/SearchBar';
import { Typography, Grid } from 'material-ui';
import {
  Container,
  StyledTyped,
  StyledDownArrIcon,
  BottomGrid,
  SectionContainer
} from './style';

const typedText = ['Dominican Republic &#x1F1E9;&#x1F1F4;', 'beaches &#x1F3DD;', 'mountains &#x1F3D4;', 'rivers &#x1F30A;', 'experiences &#x1F938;', 'Pico Duarte &#x1F9D7;', 'Laguna Dudu &#x1F3CA;', 'El Limon &#x1F3C7;', 'caribbean &#x1F5FA;', 'happiness &#x1F57A;'];


const FirstSection = () => (
    <SectionContainer image={'images/bighero.jpg'}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={12}>
          <Typography variant="display4" align="center" style={{ color: '#fff' }} gutterBottom>
            <span style={{ fontWeight: 100 }}>Discover </span>
            <StyledTyped
              strings={typedText}
              startDelay={2000}
              typeSpeed={90}
              backSpeed={60}
            />
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <SearchBar />
        </Grid>
        <BottomGrid item sm={12}>
          <Typography variant="title" align="center" color="inherit">
            Browse tours
          </Typography>
          <StyledDownArrIcon />
        </BottomGrid>
      </Grid>
    </SectionContainer>
);

export default FirstSection;
