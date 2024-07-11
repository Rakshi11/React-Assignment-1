import React, { useState } from 'react';

const Display = ({ name, address }) => {
  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setNewAddress(e.target.value);
  };

  const containerStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #61dafb',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
    color: '#282c34'
  };

  return (
    <div style={containerStyle}>
      <h3>Display Component</h3>
      <label>
        Name:
        <input type="text" value={newName} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={newAddress} onChange={handleAddressChange} />
      </label>
    </div>
  );
};

export default Display;