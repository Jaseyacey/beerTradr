import React from 'react';

import { AuthUserContext } from '../Session';
// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ImageUploader from '../ImageUpload';


const AccountPage = () => (
  
  <AuthUserContext.Consumer>
    {authUser => (
      <div className = "userHomePage">
      <Jumbotron flair>
        <h1>{authUser.email}</h1>
      </Jumbotron>
          <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            // onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
      </div>  
    )}
          
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
