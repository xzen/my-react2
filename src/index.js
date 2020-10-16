import React from 'react';
import ReactDOM from 'react-dom';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import NavBar from './components/navbar';
import ListMovies from './components/list-movies';
import SignIn from './components/sign-in';
import Advertising from './components/advertising';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <NavBar />
    <Container>
      <Row className="mt-4">
        <Col xs={8}>
          <ListMovies genre="Aventure" />
          <hr className="my-4" />
          <ListMovies genre="Horreur" />
          <hr className="my-4" />
          <ListMovies genre="Comédie" />
        </Col>
        <Col xs={3}>
          <SignIn />
          <hr className="my-4" />
          <Advertising />
        </Col>
      </Row>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
