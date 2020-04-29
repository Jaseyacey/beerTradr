import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Icon } from "semantic-ui-react"
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import SignOutButton from '../components/SignOut';

const NavBar = () => (
  <>
  <Navbar bg="dark" variant="dark">
 <Nav.Link href="/"><Icon link name='beer' size="large" /></Nav.Link> 
    <Nav className="mr-auto">
      <Nav.Link href="/ ">Home</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
      <Nav.Link href="signin">Sign In</Nav.Link>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
      <Nav.Link href="/">Popular Beers</Nav.Link>
    </Nav>
    
  </Navbar>
  </>
);

export default NavBar;