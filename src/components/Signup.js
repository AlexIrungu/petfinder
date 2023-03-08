import React, { useState } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send signup data to server for authentication
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <form className='forms' onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" value={gender} onChange={handleGenderChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <Link to="home"><button onClick={() => { window.location.href = 'http://localhost:3000/home' }} type="submit">Signup</button></Link>
      <span>
        <h6>If you have an account</h6>
        <Link to="login"><h6>Login !</h6></Link>
      </span>
    </form>

  );
};

export default SignupForm