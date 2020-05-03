import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FetchRandomBeer from '../../beerAPI/beerApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landing = () => (
  <div className="popbeers">
    <Jumbotron>
      <h1>Popular Beer</h1>
    </Jumbotron>
    <FetchRandomBeer />
  <Container>
  <Row>
    <Col>Login</Col>
    <Col xs={6}>This is a craft beer trading site.</Col>
    <Col>Sign Up</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
</div>
);

export default Landing;
