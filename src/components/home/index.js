import React from 'react';
import {
  Grid
} from '@material-ui/core';

import Search from './search';

const Home = () => (
  <Grid container spacing={1}>
    <Search />
  </Grid>
);

export default Home;
