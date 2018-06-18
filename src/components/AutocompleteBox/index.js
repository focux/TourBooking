import React from 'react';
import { Grid } from 'material-ui';
import { CustomGrid, Link } from './style';

const AutocompleteBox = ({ predictions }) => (
  <Grid container justify="center">
    {
      predictions.map(({ description, structured_formatting }, id) =>
        (
          <CustomGrid item key={id} xs={11} md={9}>
            <Link href={`/search/${encodeURI(structured_formatting.main_text)}`}>
              {description}
            </Link>
          </CustomGrid>
        ))
    }
  </Grid>
);

export default AutocompleteBox;

