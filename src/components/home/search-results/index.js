import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Grid
} from '@material-ui/core';

import { addProductCaddy } from '../../caddy/actions';
import store from '../../../store';

const Product = ({ product }) => {
  const {
    name,
    qte,
    price,
    img
  } = product;

  return (
    <Grid container>
      <Grid xs={2}>
        <img style={{ width: 50 }} src={img} alt={name} />
      </Grid>
      <Grid xs={4}>
        <span>{name}</span>
      </Grid>
      <Grid xs={2}>
        <span>{qte}</span>
      </Grid>
      <Grid xs={2}>
        <span>{price}</span>
      </Grid>
      <Grid container xs={1}>
        <Button variant="contained" color="primary" size="small" fullWidth>
          Voir
        </Button>
      </Grid>
      <Grid container xs={1}>
        <Button onClick={() => store.dispatch(addProductCaddy(product))} variant="contained" color="secondary" size="small" fullWidth>
          Add Caddy
        </Button>
      </Grid>
    </Grid>
  );
};

const CountProduct = ({ count }) => (
  <Grid container>
    <Grid xs={12}>
      {count ? <h1>{`Results (${count}) :`}</h1> : null}
    </Grid>
  </Grid>
);

const SearchResults = ({ results }) => (
  <Grid container>
    <CountProduct count={results.length} />
    {results.map((product) => (<Product product={product} />))}
  </Grid>
);

const mapToProps = (state) => {
  const { data, resultsSearch } = state.data;
  const results = resultsSearch.length ? resultsSearch : data;

  return ({ results });
};

export default connect(mapToProps)(SearchResults);
