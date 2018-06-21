import React, { Fragment } from 'react';
import { StyleSheetManager } from 'styled-components';
import SearchBar from 'Components/SearchBar';
import { Typography, Grid, Hidden } from 'material-ui';
import AutocompleteBox from 'Components/AutocompleteBox';
import Typed from 'Components/CustomTyped';
import {
  HiddenTitle,
  StyledTyped,
  StyledDownArrIcon,
  BottomGrid,
  SectionContainer
} from './style';

const typedText = ['new friends <span role="img" aria-label="emoji">&#x1F46B;</span>', 'Dominican Republic <span role="img" aria-label="emoji">&#x1F1E9;&#x1F1F4;</img>', 'beaches <span role="img" aria-label="emoji">&#x1F3DD;</img>', 'mountains <span role="img" aria-label="emoji">&#x1F3D4;</img>', 'rivers <span role="img" aria-label="emoji">&#x1F30A;</img>', 'experiences <span role="img" aria-label="emoji">&#x1F938;</img>', 'happiness <span role="img" aria-label="emoji">&#x1F57A;</img>'];

const FirstSection = (props) => (
    <SectionContainer image={'/images/bighero.jpg'}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={12}>
          <Hidden only="xs">
          <Typography variant="display4" align="center" style={{ color: '#fff' }} gutterBottom>
            <span style={{ fontWeight: 100 }}>Discover </span>
            <Typed typedText={typedText} />
          </Typography>
          </Hidden>
          <Hidden smUp>
            <HiddenTitle>
              Descubre tu país <span role="img" aria-label="emoji">&#x1F1E9;&#x1F1F4;</span>
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
