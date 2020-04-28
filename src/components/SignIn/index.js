import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Icon
} from "semantic-ui-react";
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
<div className="SignInForm">
      <Header as="h1" icon color="violet" textAlign="center">
          <Icon name="beer" color="violet" />
          Login to beertradr
      </Header>
        <SignInForm />
</div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    
    return (
<Grid textalign ="center" verticalAlign="center" className="SignInForm" >
  <Form.Group controlId="formBasicEmail">     
      <form onSubmit={this.onSubmit} size="large">
            <Segment stacked>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <Button variant="primary" disabled={isInvalid} type="submit">
              Sign In
            </Button>
            {error && <p>{error.message}</p>}
            </Segment>
        <SignUpLink />
      <PasswordForgetLink />
    </form>
  </Form.Group>

</Grid>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
