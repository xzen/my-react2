import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Grid
} from '@material-ui/core';

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
        <img src={img} alt={name} />
      </Grid>
      <Grid xs={5}>
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
