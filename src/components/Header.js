import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const contaner = {
    display: 'flex',
    margin: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const h2 = {
    flex: '0.4',
    fontSize: 'xx-large',
  };
  const nav = {
    display: 'flex',
    gap: '1rem',
  };
  const a = {
    fontSize: 'x-large',
    paddingRight: '1rem',
    borderRight: '2px solid black',
  };
  const a1 = {
    fontSize: 'x-large',
  };
  return (
    <header style={contaner}>
      <h2 style={h2}>Math Magicians</h2>
      <nav style={nav}>
        <Link to="/"><a href="javascrpt;void()" style={a}>Home</a></Link>
        <Link to="calculator"><a href="javascrpt;void()" style={a}>Calculator</a></Link>
        <Link to="quote"><a href="javascrpt;void()" style={a1}>Quote</a></Link>
      </nav>
    </header>
  );
};

export default Header;
