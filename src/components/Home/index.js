import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div className="homepage">
    <Jumbotron>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
    </Jumbotron>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
