import React from 'react';
import './App.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import First1 from './First1';
import Second1 from './Second1';
import Third1 from './Third1';
import Fourth1 from './Fourth1';
import StudentFunction from './StudentFunction';
import StudentClass from './StudentClass';
import Display from './Display';

function App() {
  const studentData = {
    name: 'Rakshitha',
    address: 'Telangana',
    scores: [95, 85, 92]
  };

  const handleClickHello = () => {
    alert('Hello');
  };

  const handleClickBye = () => {
    alert('Bye');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <First />
        <Second />
        <Third />
        <Fourth />
        <First1 />
        <Second1 />
        <Third1 />
        <Fourth1 />
        <StudentFunction {...studentData} />
        <StudentClass {...studentData} />
        <Display name={studentData.name} address={studentData.address} />
        <button onClick={handleClickHello}>Say Hello</button>
        <button onClick={handleClickBye}>Say Bye</button>
      </header>
    </div>
  );
}

export default App;