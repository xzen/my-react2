import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
} from '@material-ui/core';

import intialState from './initial-state';
import Item from './components/item';

import './index.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: intialState,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Grid container spacing={1}>
        {data.map((item) => <Item item={item} />)}
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
