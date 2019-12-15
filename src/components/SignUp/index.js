import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PropTypes } from 'prop-types';

import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';



const SignUpPage = () => (
  <Container>
    <h1>
        Sign Up
    </h1>
    <br/>
    <SignUpForm />
  </Container>
);


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


      return (
        <Container>
          <Form onSubmit={this.onSubmit}>
          {/* <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>Sign Up</Col>
          </Row> */}
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" value={email} onChange={this.onChange} id="exampleEmail" placeholder="Email address" />

              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input type="text" name="username" value={username} onChange={this.onChange} id="exampleUsername" placeholder="Your Username" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
              <Label for="examplePasswordOne">Password</Label>
              <Input type="password" name="passwordOne" value={passwordOne} onChange={this.onChange} id="examplePasswordOne" placeholder="Password"/>
          </FormGroup>
          <FormGroup>
            <Label for="eexamplePasswordTwo">Confirm Password</Label>
            <Input type="password" name="passwordTwo" value={passwordTwo} onChange={this.onChange} id="examplePasswordTwo" placeholder="Confirm Password"/>
          </FormGroup>
          <FormGroup>
            <Button primary disabled={isInvalid} type="submit" color="primary" size="lg">
              Sign Up
            </Button>
          </FormGroup>
      </Form>
      </Container>
    );


//// SEMANTIC-UI ////

    // return (
    //   <Grid centered columns={2}>
    //       <Grid.Column>
    //         {/* <Header as="h2" textAlign="center">
    //           CreateAccount
    //         </Header> */}
    //         <Segment>
    //           <Form size="large" onSubmit={this.onSubmit}>
    //             <Form.Input
    //               fluid
    //               icon="user"
    //               iconPosition="left"
    //               name="email"
    //               value={email}
    //               onChange={this.onChange}
    //               type="text"
    //               placeholder="Email address"
    //             />
    //             <Form.Input
    //               fluid 
    //               icon="lock"
    //               iconPosition="left"
    //               name="passwordOne"
    //               value={passwordOne}
    //               onChange={this.onChange}
    //               placeholder="Password"
    //               type="password"
    //             />
    //             <Form.Input
    //               fluid
    //               icon="lock"
    //               iconPosition="left"
    //               name="passwordTwo"
    //               value={passwordTwo}
    //               onChange={this.onChange}
    //               placeholder="Password"
    //               type="password"
    //             />
    //             <Button color="blue" fluid size="large" primary disabled={isInvalid} type="submit">
    //       Sign Up
    //             </Button>
    //           </Form>
    //         </Segment>
    //         <Message>
    //           Not registered yet? <a href="#">Sign Up</a>
    //         </Message>
    //       </Grid.Column>
    //   </Grid>
    // );

    //// PLAIN REACT ///
      // <form onSubmit={this.onSubmit}>
      //   <Form.Field>
      //       <label>Username</label>
      //       <input
      //         name="username"
      //         value={username}
      //         onChange={this.onChange}
      //         type="text"
      //         placeholder="Full Name"
      //       />
      //   </Form.Field>
      //   <Form.Field>
      //       <label>Email</label>
      //       <input
      //         name="email"
      //         value={email}
      //         onChange={this.onChange}
      //         type="text"
      //         placeholder="Email Address"
      //       />
      //   </Form.Field>
      //   <Form.Group widths="equal">
      //       <Form.Field>
      //         <label>Password</label>
      //         <input
      //           name="passwordOne"
      //           value={passwordOne}
      //           onChange={this.onChange}
      //           type="password"
      //           placeholder="Password"
      //         />
      //       </Form.Field>
      //       <Form.Field>
      //         <label>Confirm Password</label>
      //         <input
      //           name="passwordTwo"
      //           value={passwordTwo}
      //           onChange={this.onChange}
      //           type="password"
      //           placeholder="Confirm Password"
      //         />
      //       </Form.Field>
      //     </Form.Group>
      //   <Button primary disabled={isInvalid} type="submit">
      //     Sign Up
      //   </Button>

      //   {error && <p>{error.message}</p>}
      // </form>
  };
}

Container.propTypes = {
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  // applies .container-fluid class if bool or .container-{breakpoint} if string
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };