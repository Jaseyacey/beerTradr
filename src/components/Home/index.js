import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuthorization } from '../Session';
import { Header, Icon, Grid, Image } from 'semantic-ui-react'
import FetchRandomBeer from '../../beerAPI/beerApi';

const HomePage = () => (
  <>
  <div className="homepage">
  <Header as='h1' icon>
      <Icon name='beer' />
        beerTradr
      <Header.Subheader>
        No1 Craft Beer Trading Site
    </Header.Subheader>
  </Header>
  </div>
  <Grid celled='internally'>
  <Grid.Row>
    {/* // Left edge container */}
    <Grid.Column width={3}>
      
    </Grid.Column>
    <Grid.Column width={10}>
      <div className="homepage">
        <Jumbotron>
        <h3>This is the premier Craft Beer trading site.</h3>
        <h4>Have a look at the steps below in order to have a happy and safe trading journey</h4>
        </Jumbotron>
        <listOrdered>
          <li>
            <p >List a beer on your profile.</p>
          </li>
          <li>
            <p>Mark it ready to trade</p>
          </li>
          <li>
            <p>Respond to users enquiring about trading it</p>
          </li>
          <li>
            <p>Post your beer to the next person</p>
          </li>
          <li>
            <p>Wait for your traded beer to</p>
          </li>
          <li>
            <p>Drink away, on only the finest hops</p>
          </li>
        </listOrdered>
      </div>
    </Grid.Column>
    <Grid.Column width={3}>
      
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column width={3}>
      
    </Grid.Column>
    <Grid.Column width={10}>
    <div className="homepage">
      <h3>What is being traded now? </h3>

      <div class="ui feed">
        <FetchRandomBeer />
      </div>
    </div>
    </Grid.Column>
    <Grid.Column width={3}>
      
    </Grid.Column>
  </Grid.Row>
</Grid>
</>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
