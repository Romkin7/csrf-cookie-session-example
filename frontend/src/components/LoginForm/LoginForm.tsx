import { FC } from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

const LoginForm: FC = () => {
  return (
      <Form
          action="http://127.0.0.1:8080/login"
          method="POST"
          className="mt-5 py-5"
      >
          <Container fluid={true}>
              <Row className="justify-content-md-center">
                  <Col className="col-md-12">
                      <h2>Login</h2>
                  </Col>
              </Row>
              <Row className="flex-column justify-content-md-center">
                  <Col className="col-md-12">
                      <InputGroup className="mb-3">
                          <InputGroup.Text id="email-field">
                              @email
                          </InputGroup.Text>
                          <Form.Control
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="email-field"
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Text id="password-field">
                              Password
                          </InputGroup.Text>
                          <Form.Control
                              type="password"
                              placeholder="Password"
                              aria-label="Password"
                              aria-describedby="password-field"
                          />
                      </InputGroup>
                  </Col>
                  <Col className="col-md-12">
                      <Button type="submit" className="btn-success">
                          Login
                      </Button>
                  </Col>
              </Row>
          </Container>
      </Form>
  );
}

export default LoginForm;