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
<div className="homepage">
        <Jumbotron>
          <h1 class="ui header">
            <img src="" class="ui circular image" />
            {authUser.email}
          </h1>
        </Jumbotron>
  <h3>Add Additonal Beers</h3>
    <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search beer..." />
          <i class="search icon" />
        </div>
        <div class="results"></div>
      </div>
</div>  
)}

  </AuthUserContext.Consumer>
  </>  

);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
