import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      isAuthenticated: false
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null // Clear error message when user types
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Set isAuthenticated to true
        this.setState({ isAuthenticated: true });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { email, password, error, isAuthenticated } = this.state;

    if (isAuthenticated) {
      return <redirect to="/Home" />;
    }

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
