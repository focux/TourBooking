import React from 'react';
import SearchBar from 'Components/SearchBar';
import { Typography, Grid } from 'material-ui';
import AutocompleteBox from 'Components/AutocompleteBox';
import {
  Container,
  StyledTyped,
  StyledDownArrIcon,
  BottomGrid,
  SectionContainer
} from './style';

const typedText = ['new friends &#x1F46B;', 'Dominican Republic &#x1F1E9;&#x1F1F4;', 'beaches &#x1F3DD;', 'mountains &#x1F3D4;', 'rivers &#x1F30A;', 'experiences &#x1F938;', 'happiness &#x1F57A;'];


const FirstSection = (props) => (
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
          <SearchBar onKeyPress={props.handleKeyPress} onClickSearch={props.handleSearch} onChange={props.onChangeSearch} id="home-search-bar" />
        </Grid>
        <Grid item sm={12}>
          <AutocompleteBox predictions={props.predictions} />
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
