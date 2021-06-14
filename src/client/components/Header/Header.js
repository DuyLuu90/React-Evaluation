import React from 'react';
import { Link } from 'react-router-dom';

import {AppLogo} from '../Utils/Utils'

import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-list">
        <AppLogo></AppLogo>
        <span>Counter: {this.props.counter}</span>
        <nav className="nav">
          <Link to="/">HOME</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/list">List</Link>
        </nav>
      </div>
    );
  }
}


