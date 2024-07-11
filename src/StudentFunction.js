import React from 'react';

const StudentFunction = ({ name, address, scores }) => {
  return (
    <div>
      <h3>Student Function Component</h3>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Scores: {scores.join(', ')}</p>
    </div>
  );
};

export default StudentFunction;