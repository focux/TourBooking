import React from 'react';
import SearchBar from 'Components/SearchBar';
import { Typography, Grid, Hidden } from 'material-ui';
import AutocompleteBox from 'Components/AutocompleteBox';
import {
  HiddenTitle,
  StyledTyped,
  StyledDownArrIcon,
  BottomGrid,
  SectionContainer
} from './style';

const typedText = ['new friends &#x1F46B;', 'Dominican Republic &#x1F1E9;&#x1F1F4;', 'beaches &#x1F3DD;', 'mountains &#x1F3D4;', 'rivers &#x1F30A;', 'experiences &#x1F938;', 'happiness &#x1F57A;'];


const FirstSection = (props) => (
    <SectionContainer image={'/images/bighero.jpg'}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={12}>
          <Hidden only="xs">
          <Typography variant="display4" align="center" style={{ color: '#fff' }} gutterBottom>
            <span style={{ fontWeight: 100 }}>Discover </span>
            <StyledTyped
              strings={typedText}
              startDelay={2000}
              typeSpeed={90}
              backSpeed={60}
            />
          </Typography>
          </Hidden>
          <Hidden smUp>
          <HiddenTitle>
            Descubre tu país&#x1F1E9;&#x1F1F4;
          </HiddenTitle>
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <SearchBar onKeyPress={props.handleKeyPress} onClickSearch={props.handleSearch} onChange={props.onChangeSearch} id="home-search-bar" />
        </Grid>
        <Grid item xs={12}>
          <AutocompleteBox predictions={props.predictions} />
        </Grid>
        <BottomGrid item sm={12}>
          <Typography variant="title" align="center" color="inherit">
            Explorar tours
          </Typography>
          <StyledDownArrIcon />
        </BottomGrid>
      </Grid>
    </SectionContainer>
);

export default FirstSection;
