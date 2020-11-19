import React from 'react';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';

const Caddy = ({ count }) => (
  <div>
    <Link to="/caddy">{`Caddy (${count})`}</Link>
  </div>
);

const mapToProps = (state) => ({
  count: state.caddy.length
});

export default connect(mapToProps)(Caddy);
