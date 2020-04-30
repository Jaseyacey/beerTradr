import React from 'react';
import NavBar from "../../Navbar/navbar"
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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
          <Button>Submit</Button>
        </div>
    <Container>
        <div className="results">
          <h1>My Beers</h1>
          <table class = "ui celled table">
            <thead>
              <tr>
                <th>Beer</th>
                <th>Brewery</th>
                <th>Trading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Beer">Putty</td>
                <td data-label="Brewery">Verdant</td>
                <td><input type="radio" id='express' name="Yes1" /> Yes</td>
                <td><input type="radio" id='express' name="Yes1" /> No</td>
              </tr>
              <tr>
                <td data-label="Beer">Putty</td>
                <td data-label="Brewery">Verdant</td>
                <td><input type="radio" id='express' name="Yes2" /> Yes</td>
                <td><input type="radio" id='express' name="Yes2" /> No</td>
              </tr>
              <tr>
                <td data-label="Beer">Putty</td>
                <td data-label="Brewery">Verdant</td>
                <td><input type="radio" id='express' name="Yes3" /> Yes</td>
                <td><input type="radio" id='express' name="Yes3" /> No</td>
              </tr>
            </tbody>
          </table>
        </div>
    </Container>
      </div>
</div>  
)}

  </AuthUserContext.Consumer>
  </>  

);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
