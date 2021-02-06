import React from 'react';
import { NavLink } from 'react-router-dom';
//import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>Micro front-end</h1>
    </div>
    <nav>
      <ol className="center-column">        
        <li>
          <NavLink to="/home">home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/root">Create new Root</NavLink>
        </li>        
      </ol>
    </nav>
  </header>
);

export default AppHeader;