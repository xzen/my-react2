import React from 'react';
import {
  Col,
  Form,
  Row,
  Button,
} from 'react-bootstrap';

const SignIn = () => (
  <Row>
    <Col xs={12}>
      <Row>
        <Col>
          <h3>Sign-in</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SignIn;
