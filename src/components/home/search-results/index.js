import React from 'react';
import {
  Button,
  Grid
} from '@material-ui/core';

const Product = () => (
  <Grid container>
    <Grid xs={2}>
      <h4>Image</h4>
    </Grid>
    <Grid xs={5}>
      <h4>Nom produit</h4>
    </Grid>
    <Grid xs={2}>
      <h4>Quantité</h4>
    </Grid>
    <Grid xs={2}>
      <h4>Prix</h4>
    </Grid>
    <Grid container xs={1}>
      <Button variant="contained" color="primary" size="small" fullWidth>
        Voir
      </Button>
    </Grid>
  </Grid>
);

const CountProduct = () => (
  <Grid container>
    <Grid xs={2}>
      <h1>Results (10) :</h1>
    </Grid>
  </Grid>
);

const SearchResults = () => (
  <Grid container>
    <CountProduct />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </Grid>
);

export default SearchResults;
