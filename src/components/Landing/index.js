import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FetchRandomBeer from '../../beerAPI/beerApi';

const Landing = () => (
  <div className="popbeers">
    <Jumbotron>
      <h1>Popular Beer</h1>
    </Jumbotron>
    <FetchRandomBeer />
  </div>
);

export default Landing;
