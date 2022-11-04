import React from 'react';

const Quote = () => {
  const maindiv = {
    textAlign: 'center',
    padding: '1.5rem',
    paddingTop: '10%',
  };
  return (
    <div style={maindiv}>
      <p>
        Mathematics is not about numbers,
        equotions, computations, or algorithms:
        it is about understanding. - William Paul Thurston
      </p>
    </div>
  );
};

export default Quote;
