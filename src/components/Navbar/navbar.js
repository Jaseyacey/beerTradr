import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import SignOutButton from '../SignOut';

const NavBar = () => (
  <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/Home">beerTradr</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Account">Profile Page</Nav.Link>
      <Nav.Link href="/">Popular Beers</Nav.Link>
    </Nav>
    <SignOutButton />
  </Navbar>
  </>
);

export default NavBar;