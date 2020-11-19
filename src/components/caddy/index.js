import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Button
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
        <img style={{ width: 50 }} src={img} alt={name} />
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

const Caddy = ({ results }) => (
  <Grid container>
    {results.map((product) => (<Product product={product} />))}
  </Grid>
);

const mapToProps = (state) => ({
  results: state.caddy
});

export default connect(mapToProps)(Caddy);
