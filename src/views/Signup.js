import React, { Component } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

/**
 * Signup Component
 * 
 * A React class component for user sign-up functionality. This component provides a form where users can input their email and password
 * to create a new account using Firebase Authentication.
 */
export default class Signup extends Component {
  /**
   * Initializes the component state and binds event handler methods.
   * 
   * @param {Object} props - The props passed to the component.
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',         // Stores the email input value.
      password: '',      // Stores the password input value.
      error: ''          // Stores any error message related to the signup process.
    };

    // Bind event handler methods to the class instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  /**
   * Handles changes to the input fields by updating the component state.
   * 
   * @param {Event} event - The event object from the input field.
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  /**
   * Handles the form submission for user signup.
   * 
   * Prevents the default form submission, retrieves email and password from state,
   * and attempts to create a user with Firebase Authentication.
   * 
   * @param {Event} event - The event object from the form submission.
   */
  handleSignup(event) {
    event.preventDefault();
    const { email, password } = this.state;

    createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successfully signed up
        const user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        // Handle errors during signup
        this.setState({ error: error.message });
        console.error('Error signing up:', error.message);
      });
  }

  /**
   * Renders the Signup form component.
   * 
   * @returns {JSX.Element} The rendered form element.
   */
  render() {
    const { email, password, error } = this.state;

    return (
      <div className='login-body' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6fa', height: '100vh' }}>
        <div className='login-form' style={{ width: '400px', padding: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#2c3e50' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Sign Up</h2>
          <form onSubmit={this.handleSignup}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email" style={{ color: '#fff' }}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }}
                required
              />
            </div>
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#e6e6fa', color: '#2c3e50', fontWeight: 'bold' }}
            >
              Sign Up
            </button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          </form>
        </div>
      </div>
    );
  }
}
