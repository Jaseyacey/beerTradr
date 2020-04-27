import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import FetchRandomBeer from "../../beerapi/beerapi";

const Landing = () => (  
  <div className = "userHomePage">
    <div container>
      <Jumbotron>
        <h1>Popular Beers</h1>
    </Jumbotron>
    </div>
  <Container>
    <div className = "beerContainer">
      <FetchRandomBeer />
    </div>
  </Container>
  </div>
);

export default Landing;
