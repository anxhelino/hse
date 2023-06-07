import React from 'react';
import ChatSupport from './ChatSupport';
import LoginFormContainer from './LoginFormContainer';
import LoginLogo from '../../assets/images/login logo.jpg';

const LoginContainer = () => {
  return (
    <div className='loginContainer'>
      <div className='formBackgroundContainer'></div>

      <div className='logoContainer'>
        <img src={LoginLogo} alt='Parrotias Logo' />
      </div>

      <LoginFormContainer />
      <div className='loginFooter'>
        <ChatSupport />
      </div>
      <div className='otherFooter'></div>
      <div className='another'></div>
    </div>
  );
};

export default LoginContainer;
