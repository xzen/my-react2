import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';

import store from '../../../store';
import { productSearch } from '../data/actions';

const Search = () => (
  <Grid container style={{ marginTop: '10px' }}>
    <Grid item xs={10}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search">Search Products</InputLabel>
        <OutlinedInput
          id="search"
          startAdornment={<InputAdornment position="start">Search</InputAdornment>}
          labelWidth={125}
        />
      </FormControl>
    </Grid>
    <Grid container item xs={2}>
      <Button
        variant="outlined"
        size="large"
        onClick={() => store.dispatch(productSearch('ja'))}
        fullWidth
      >
        Search
      </Button>
    </Grid>
  </Grid>
);

export default Search;
