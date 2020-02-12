import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Container, Row, Col, Input, InputGroupAddon, InputGroup, Form, Button } from 'reactstrap';

const PasswordForgetPage = () => (
  <Container>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </Container>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Col md={6}>
            <InputGroup>
               <Input placeholder="Email address" name="email" value={this.state.email} onChange={this.onChange} type="email" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroupAddon> <Button disabled={isInvalid} type="submit" color="danger">Reset My Password</Button></InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };