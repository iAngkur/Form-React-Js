import React from 'react';
import './App.css';
import Inputs from './components/inputs/index';
import UncontrolledForm from './components/inputs/uncontrolledForm';
import ControlledForm from './components/inputs/controlledForm';
import SplitForm from './components/splitForm';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* <div className="col">
          <h3>Normal Form</h3>
          <hr />
          <Inputs />
        </div>

        <div className="col">
          <h3>Uncontrolled Form</h3>
          <hr />
          <UncontrolledForm />
        </div> */}

        {/* <div className="col">
          <h3>Controlled Form</h3>
          <hr />
          <ControlledForm />
        </div> */}

        <div className="col">
          <h3>Split Form</h3>
          <hr />
          <SplitForm />
        </div>
      </div>
    </div>
  );
}

export default App;