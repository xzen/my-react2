import React from 'react';
import ReactDOM from 'react-dom';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import NavBar from './components/navbar';
import ListMovies from './components/list-movies';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <NavBar />
    <Container>
      <Row>
        <Col xs={8}>
          <ListMovies genre="Aventure" />
          <ListMovies genre="Horreur" />
          <ListMovies genre="Comédie" />
        </Col>
        <Col xs={3}>
          <h1>Col 3</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
