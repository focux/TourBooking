import React from 'react';
import { Grid, Hidden } from 'material-ui';
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

const SearchBar = ({ inputRef, onClickSearch, onKeyPress,
   ...others }) => (
  <Container style={{ flexGrow: 1 }}>
    <Grid container justify="center" alignItems="center">
      <StyledGrid item xs={11} md={9}>
        <Grid container justify="center">
          <StyledInputGrid item container sm={10} alignItems="flex-end">
            <Grid container justify="center" alignItems="flex-end">
            
              <Grid item container justify="flex-end" xs={1} sm={1}>
                <StyledLocIcon />
              </Grid>
              
              <Grid item xs={10} sm={11}>
                <SearchInput ref={inputRef} onKeyPress={onKeyPress} {...others} type="search" placeholder="Where do you want to go?" />
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
              <StyledNextBtn onClick={onClickSearch} variant="raised" size="small" color="primary">
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
