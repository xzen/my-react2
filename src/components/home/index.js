import React from 'react';
import {
  Grid
} from '@material-ui/core';

import Caddy from './caddy';
import Search from './search';
import SearchResults from './search-results';

const Home = () => (
  <Grid container spacing={1}>
    <Caddy />
    <Search />
    <SearchResults />
  </Grid>
);

export default Home;
