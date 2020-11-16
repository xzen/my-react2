import React from 'react';
import {
  Grid,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import './index.scss';

const Item = ({ item }) => {
  const { label, checked } = item;

  return (
    <Grid container item xs={12}>
      <FormControlLabel
        control={<Checkbox checked={checked} />}
        label={label}
      />
    </Grid>
  );
};

export default Item;
