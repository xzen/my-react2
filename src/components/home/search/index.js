import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';

const Search = () => (
  <Grid container style={{ marginTop: '10px' }}>
    <Grid container xs={10}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search">Search Products</InputLabel>
        <OutlinedInput
          id="search"
          startAdornment={<InputAdornment position="start">Search</InputAdornment>}
          labelWidth={125}
        />
      </FormControl>
    </Grid>
    <Grid container xs={2}>
      <Button variant="outlined" size="large" fullWidth>
        Search
      </Button>
    </Grid>
  </Grid>
);

export default Search;
