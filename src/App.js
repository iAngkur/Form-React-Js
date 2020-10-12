import React from 'react';
import './App.css';
import SignupForm from './components/signupForm/index';

class App extends React.Component {

  state = {
    users: [] // jarai signup korbe tader details etay save kore rakhbo
  }

  createUser = (user) => {
    user.id = new Date().getTime().toString()
    this.setState({
      users: [...this.state.users, user]
    });
  }

  render() {
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
  
          {/* <div className="col">
            <h3>Split Form</h3>
            <hr />
            <SplitForm />
          </div> */}
          <div className="col">
            <h3>Signup Form</h3>
            <hr />
            <SignupForm createUser={this.createUser}/>

            <div>
              <h3 className="mt-5">All Registered Users</h3>
              <ul className="list-group">
                {this.state.users.map(user => (
                  <li key={user.id} className="list-group-item">
                    {user.name} -- {user.email}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;