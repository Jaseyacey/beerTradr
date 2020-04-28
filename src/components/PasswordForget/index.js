import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Header, 
  Form,
  Button
} from 'semantic-ui-react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const PasswordForgetPage = () => (
  <div className="forgotPassword"> 
      <Jumbotron fluid>
          <Container>
          <Header as="h3" block>
          <h1>Forgotten Password</h1>
          </Header>
          </Container>
    </Jumbotron>
        <br></br>
        <br></br>
        <br></br>
    <PasswordForgetForm />
</div>
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
  <div class="ui center aligned container">
      <Form Field onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
  </div>
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