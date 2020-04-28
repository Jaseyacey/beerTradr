import React from 'react';
import NavBar from "../../Navbar/navbar"
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Jumbotron from 'react-bootstrap/Jumbotron';

const AccountPage = () => (
  <>
  <AuthUserContext.Consumer>

    {authUser => (
      <div>
        <Jumbotron>
        <h1>Account: {authUser.email}</h1>
        </Jumbotron>  
      </div>
    )}
  </AuthUserContext.Consumer>
  </>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
