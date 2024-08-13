import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from 'react-router-dom';

/**
 * Login Component
 * 
 * A React class component for user login functionality. This component provides a form for users to input their email and password
 * to log into their account using Firebase Authentication.
 */
export default class Login extends Component {
  /**
   * Initializes the component state.
   * 
   * @param {Object} props - The props passed to the component.
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',              // Stores the email input value.
      password: '',           // Stores the password input value.
      error: null,            // Stores any error message related to the login process.
      isAuthenticated: false  // Indicates whether the user is authenticated.
    };
  }

  /**
   * Handles changes to the input fields by updating the component state.
   * 
   * Clears any existing error message when the user types in the input fields.
   * 
   * @param {Event} e - The event object from the input field.
   */
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null // Clear error message when user types
    });
  };

  /**
   * Handles the form submission for user login.
   * 
   * Prevents the default form submission behavior, retrieves email and password from state,
   * and attempts to authenticate the user with Firebase Authentication.
   * 
   * @param {Event} e - The event object from the form submission.
   */
  handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const { email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed in
        const user = userCredential.user;
        this.setState({ isAuthenticated: true });
      })
      .catch((error) => {
        // Handle errors during login
        this.setState({ error: error.message });
      });
  };

  /**
   * Renders the Login form component.
   * 
   * If the user is authenticated, redirects to the "/Home" route.
   * Otherwise, renders the login form with styles and conditionally displays error messages.
   * 
   * @returns {JSX.Element} The rendered form element or a redirect.
   */
  render() {
    const { email, password, error, isAuthenticated } = this.state;

    // Redirect to "/Home" if the user is authenticated
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