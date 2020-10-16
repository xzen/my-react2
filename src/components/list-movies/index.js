import React from 'react';
import {
  Button,
  Card,
  Col,
  Row,
} from 'react-bootstrap';

const Item = ({ src, title }) => (
  <Col xs={4} className="mb-4">
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Card>
  </Col>
);

const ListMovies = ({ genre }) => (
  <Row>
    <Col xs={12}>
      <h3>{genre}</h3>
    </Col>
    <Col xs={12}>
      <Row>
        <Item
          src="https://fr.web.img2.acsta.net/c_222_296/pictures/20/09/08/11/36/3637808.jpg"
          title="Petit Vampire"
        />
        <Item
          src="https://fr.web.img3.acsta.net/c_222_296/pictures/20/09/11/12/37/5251375.jpg"
          title="100% Loups"
        />
        <Item
          src="https://fr.web.img3.acsta.net/c_222_296/pictures/20/09/11/12/37/5251375.jpg"
          title="100% Loups"
        />
        <Item
          src="https://fr.web.img3.acsta.net/c_222_296/pictures/20/09/11/12/37/5251375.jpg"
          title="100% Loups"
        />
        <Item
          src="https://fr.web.img3.acsta.net/c_222_296/pictures/20/09/11/12/37/5251375.jpg"
          title="100% Loups"
        />
      </Row>
    </Col>
  </Row>
);

export default ListMovies;
