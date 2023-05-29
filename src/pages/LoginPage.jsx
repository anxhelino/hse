import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
        setIsAuthenticated(true);
        return <Navigate to="/dashboard" />;

    }

    setValidated(true);
  };

  return (
    <div className="signup-container">
      <form noValidate validated={validated} onSubmit={handleSubmit} className="signup-form">
      <h2>Login Page</h2>
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
          <button type="submit">Login</button>
        </div>

        <div className="mb-3">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
