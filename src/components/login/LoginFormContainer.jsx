import React from 'react';

const LoginFormContainer = () => {
  return (
    <div className='loginFormContainer'>
      <h1 className='loginTitle'> Welcome Back</h1>
      <p>Please enter your email and password</p>
      <form>
        <input type='email' placeholder='Email' id='email' />
        <input type='password' placeholder='Password' id='password' />
        <p>By login, you agree to our Terms & Conditions</p>
        <div className='loginButtonsContainer'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormContainer;
