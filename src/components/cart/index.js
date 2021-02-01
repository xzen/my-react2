import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ count }) => (
  <div>
    <h1>{`Product count :  ${count}`}</h1>
  </div>
);

const mapToProps = (state) => ({
  count: state.cart.count,
});

export default connect()(Cart);
