import React from 'react';
import { Film } from 'react-bootstrap-icons';
import {
  Col,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const NavBar = () => (
  <Row>
    <Col>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Film />
          <span className="ml-2">My Movies</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Action</Nav.Link>
          <Nav.Link href="#pricing">Aventure</Nav.Link>
          <Nav.Link href="#pricing">Horreur</Nav.Link>
          <Nav.Link href="#pricing">Comédie</Nav.Link>
          <Nav.Link href="#pricing">Sign-in</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Navbar>
    </Col>
  </Row>
);

export default NavBar;
