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

  handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const { email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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
      <div className='login-body' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6fa', height: '100vh' }}>
        <div className='login-form' style={{ width: '400px', padding: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#2c3e50' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Login</h2>
          <form onSubmit={this.handleLogin}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email" style={{ color: '#fff' }}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={this.handleInputChange}
                style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password" style={{ color: '#fff' }}>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleInputChange}
                style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }}
                required
              />
            </div>
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#e6e6fa', color: '#2c3e50', fontWeight: 'bold' }}
            >
              Login
            </button>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          </form>
        </div>
      </div>
    );
  }
}
