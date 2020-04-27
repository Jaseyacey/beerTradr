import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { withAuthorization } from '../Session';
import navbar from '../Navbar/navbar'

const HomePage = () => (
  <div className = "userHomePage">
    <navbar />
    <Jumbotron fluid>
      <Container>
        <h1>beerTradr</h1>
        <p>
          The No 1 Craft Beer Trading Site
        </p>
      </Container>
    </Jumbotron>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
