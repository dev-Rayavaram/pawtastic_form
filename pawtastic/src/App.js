import React from 'react';
import Form from './components/form.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <div className='leftcard'>
          <div>
              <h3>PAWTASTIC</h3>
              <h5>Human Profile</h5>
              <h5>Pet basics</h5>
              <h5>Pet details</h5>
              <h5>Confirm</h5>
          </div>
          <div className='image'>
          <img src="./assets/images.jpg" style={{width:'70px' ,height:'70px'}} alt=''></img>
          </div>
        </div>
        <div className='form'>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
