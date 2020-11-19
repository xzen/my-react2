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

class Search extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: ''
    };
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onKeyPress(e) {
    const { value } = this.state;

    if (e.key === 'Enter') {
      store.dispatch(productSearch(value));
    }
  }

  onClick() {
    const { value } = this.state;

    store.dispatch(productSearch(value));
  }

  render() {
    const { value } = this.state;

    return (
      <Grid container style={{ marginTop: '10px' }}>
        <Grid item xs={10}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="search">Search Products</InputLabel>
            <OutlinedInput
              id="search"
              value={value}
              startAdornment={<InputAdornment position="start">Search</InputAdornment>}
              labelWidth={125}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </FormControl>
        </Grid>
        <Grid container item xs={2}>
          <Button
            variant="outlined"
            size="large"
            onClick={this.onClick}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
