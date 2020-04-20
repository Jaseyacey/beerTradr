import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink, SignUpForm } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SigninPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
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

    this.state = { ...INITIAL_STATE};
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this,this.setState({ error });
      });

      event.preventDefault();
  };

  onChange = event => {
    this,this.setState ({ [event.target.name] : event.targer.value });
  };

  render() {
    const { email, password, error} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
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
       <button disabled={isInvalid} type="submit">
         Sign In
       </button>

       {error && <p>{error.message}</p>}
      </form>
   );
  }
}

const SignInForm = compose (
  withRouter,
  withFirebase,
) (SignInFormBase);

export default SigninPage;

export { SignInForm };