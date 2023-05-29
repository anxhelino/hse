import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Signup({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [signupCompleted, setSignupCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setIsAuthenticated(true);
      setValidated(true);
      setSignupCompleted(true);
    }
  };

  if (signupCompleted) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="signup-container">
      <form noValidate validated={validated} onSubmit={handleSubmit} className="signup-form">
        <h2>Signup Page</h2>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={validated && !email ? 'is-invalid' : ''}
          />
          {validated && !email && <div className="invalid-feedback">Please provide a valid email.</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={validated && !password ? 'is-invalid' : ''}
          />
          {validated && !password && <div className="invalid-feedback">Please provide a password.</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={validated && (!confirmPassword || password !== confirmPassword) ? 'is-invalid' : ''}
          />
          {validated && (!confirmPassword || password !== confirmPassword) && (
            <div className="invalid-feedback">Passwords do not match.</div>
          )}
        </div>

        <div className="mb-3">
          <button type="submit">Signup</button>
        </div>

        <div className="mb-3">
          <p>
            Already have an account? <Link to="/">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
