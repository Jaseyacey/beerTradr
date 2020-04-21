import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <Jumbotron flair>
      <h1>beerTradr</h1>
      <h3>The No 1 Craft Beer Trading App</h3>
    </Jumbotron>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
