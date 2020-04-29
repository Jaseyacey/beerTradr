import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

// Navbar imports
import Button from 'react-bootstrap/Button';
import NavBar from '../../Navbar/navbar';
import NavBarNoAuth from '../../Navbar/NavBarNoAuth';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
      <NavBar>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Popular Beers</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Profile Page</Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACT}>Contact Page</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
     </NavBar>
);

const NavigationNonAuth = () => (
  <NavBarNoAuth>
 
      <Link to={ROUTES.LANDING}>Landing</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>

  </NavBarNoAuth> 
);

export default Navigation;