import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { LocationOn } from '@material-ui/icons';
import {
  StyledGrid,
  Container,
  StyledInputGrid,
  StyledBtnGrid,
  StyledSearchIcon,
  StyledNextBtn,
  SearchInput,
  StyledLocIcon
} from './style';

const SearchBar = () => (
  <Container style={{ flexGrow: 1 }}>
    <Grid container justify="center" alignItems="center">
      <StyledGrid item sm={8}>
        <Grid container justify="center">
          <StyledInputGrid item container sm={10} alignItems="flex-end">
            <Grid container justify="center" alignItems="flex-end">
              <Grid item container justify="flex-end" sm={1}>
                <StyledLocIcon />
              </Grid>
              <Grid item sm={11}>
                <SearchInput type="text" placeholder="Where do you want to go?" />
              </Grid>
            </Grid>
          </StyledInputGrid>
          <StyledBtnGrid item container alignItems="center" sm={2}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              sm={12}
            >
              <StyledNextBtn variant="raised" size="small" color="primary">
                <StyledSearchIcon />
                SEARCH
              </StyledNextBtn>
            </Grid>
          </StyledBtnGrid>
        </Grid>
      </StyledGrid>
    </Grid>
  </Container>
);

export default SearchBar;
