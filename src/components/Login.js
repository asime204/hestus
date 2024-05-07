import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import Redirect from 'react-router-dom';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Redirect to home page
        this.setState({ redirectToHome: true });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { email, password, error } = this.state;

    // if (redirectToHome) {
    //     return <Redirect to="/Home" />;
    //   }   

    return (
      <div>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
