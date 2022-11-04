import React from 'react';

const Footer = () => {
  const foter = {
    position: 'absolute',
    bottom: '0.1%',
    display: 'flex',
    padding: '1.5rem',
    height: '3rem',
    backgroundColor: 'tomato',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };
  return (
    <footer style={foter}>
      <p>
        &copy; Math Magicians
      </p>
      <p>
        {Date()}
      </p>
    </footer>
  );
};

export default Footer;
