import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

import Item from './components/item';

import './index.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      inputText: '',
    };

    this.onChecked = this.onChecked.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/', {
      params: {
        dataset: 'que-faire-a-paris-',
        q: 'yoga',
      },
    }).then((response) => {
      const { data } = response;
      const dataUpdated = data.records.map((event) => ({
        id: event.fields.id,
        label: event.fields.title,
        checked: false,
      }));

      this.setState({
        data: dataUpdated,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  onChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  onClick() {
    this.addTask();
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }

  onChecked(id) {
    const { data } = this.state;

    this.setState({
      data: data.map((item) => {
        const updateItem = item;

        if (item.id === id) {
          updateItem.checked = !updateItem.checked;
        }

        return updateItem;
      }),
    });
  }

  onDelete(id) {
    const { data } = this.state;

    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  }

  addTask() {
    const { data, inputText } = this.state;
    const id = String(data.length + 1);

    data.push({
      id,
      label: inputText,
      checked: false,
    });

    this.setState({
      data,
      inputText: '',
    });
  }

  render() {
    const { data, inputText } = this.state;

    return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Add task"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={inputText}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={this.onClick}>Add</Button>
        </Grid>
        {data.map((item) => (
          <Item
            key={item.id}
            item={item}
            onChecked={this.onChecked}
            onDelete={this.onDelete}
          />
        ))}
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
