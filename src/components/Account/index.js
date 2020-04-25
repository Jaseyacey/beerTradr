import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Jumbotron from 'react-bootstrap/Jumbotron';


const AccountPage = () => (
  
  <AuthUserContext.Consumer>
    {authUser => (
      <div className = "userHomePage">
        <Jumbotron flair>
        <h1>{authUser.email}</h1>
        </Jumbotron>
        
        <form>
        </form>
      </div>  
    )}
          
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
