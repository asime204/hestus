// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function SignUp() {
//   const navigate = useNavigate();
//   const [signupError, setSignupError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirmPassword.value;

//     const reqBody = {
//       username: username,
//       email: email,
//       password: password,
//     };

//     const url = 'http://localhost:5000/api/signup';
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(reqBody),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     if (password !== confirmPassword) {
//       setSignupError('Passwords do not match.');
//       return;
//     }

//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data);
//     if (data.status === 'ok') {
//       navigate('/login');
//     } else {
//       setSignupError(data.message);
//     }
//   };

//   return (
//     <div className='login-body' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6fa', height: '100vh' }}>
//         <div className='login-form' style={{ width: '400px', padding: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#2c3e50' }}>
//             <h2 style={{ color: '#fff', marginBottom: '20px' }}>Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//             <div style={{ marginBottom: '10px' }}>
//                 <label htmlFor="username" style={{ color: '#fff' }}>Username</label>
//                 <input id="username" name="username" type="text" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }} />
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//                 <label htmlFor="email" style={{ color: '#fff' }}>Email</label>
//                 <input id="email" name="email" type="email" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }} />
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//                 <label htmlFor="password" style={{ color: '#fff' }}>Password</label>
//                 <input id="password" name="password" type="password" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }} />
//             </div>
//             <div style={{ marginBottom: '10px' }}>
//                 <label htmlFor="confirmPassword" style={{ color: '#fff' }}>Confirm Password</label>
//                 <input id="confirmPassword" name="confirmPassword" type="password" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#2c3e50', color: '#fff' }} />
//             </div>
//             <button className="btn btn-success" type="submit" style={{ width: '100%', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#e6e6fa', color: '#2c3e50', fontWeight: 'bold' }}>Sign Up</button>
//             </form>
//             {signupError && <p style={{ color: 'red', marginTop: '10px' }}>{signupError}</p>}
//         </div>
//     </div>
//   );
// }
