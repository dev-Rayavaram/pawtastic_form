import React from 'react';
import Form from './components/form.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='page'>
      <div className='card'>
        <div className='leftcard'>
          <div style={{margin:0,border:0,padding:0}}>
            <div className='paw'>
                <i className="fa fa-paw"></i>         
                <h3> PAWTASTIC</h3>
            </div>
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
    </div>
  );
}

export default App;
