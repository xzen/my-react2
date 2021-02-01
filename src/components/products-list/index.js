import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardGroup,
  Nav,
} from 'react-bootstrap';
import { addProductToCart } from '../cart/actions';

const Menu = () => (
  <Nav>
    <Nav.Item>
      <Nav.Link href="/cart">Cart 0</Nav.Link>
    </Nav.Item>
  </Nav>
);

const Product = ({ item, onHandleClick }) => (
  <Card>
    <Card.Body>
      <Card.Img variant="top" src={item.img} style={{ width: '200px' }} />
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        {`Price : ${item.price}`}
      </Card.Text>
      <Button variant="primary" onClick={() => onHandleClick(item)}>Add cart</Button>
    </Card.Body>
  </Card>
);

const ProductsList = class ProductsList extends Component {
  constructor(props) {
    super();

    this.props = props;
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(item) {
    const { dispatch } = this.props;

    dispatch(addProductToCart(item));
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <Menu />
        <CardGroup>
          {data.map((item) => (
            <Product
              key={item.id}
              item={item}
              onHandleClick={this.onHandleClick}
            />
          ))}
        </CardGroup>
      </div>
    );
  }
};

const mapToProps = (state) => ({
  data: state.productsList,
});

export default connect(mapToProps)(ProductsList);
