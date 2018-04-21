import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { Search } from '@material-ui/icons';
import {
  StyledGrid,
  Container,
  StyledInputGrid,
  StyledBtnGrid,
  StyledNextIcon,
  StyledNextBtn
} from './style';

const SearchBar = () => (
  <Container style={{ flexGrow: 1 }}>
    <Grid container justify="center" alignItems="center">
      <StyledGrid item sm={8}>
        <Grid container justify="center">
          <StyledInputGrid item sm={10}>
            <Grid container justify="center" alignItems="flex-end">
              <Grid item container justify="flex-end" sm={1}>
                <Search />
              </Grid>
              <Grid item sm={11}>
                <TextField
                  fullWidth
                  id="search"
                  type="search"
                  label="I want to explore.."
                />
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
                <StyledNextIcon />
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
