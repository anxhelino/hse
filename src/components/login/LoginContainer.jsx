import React from 'react';
import ChatSupport from './ChatSupport';
import LoginFormContainer from './LoginFormContainer';

const LoginContainer = () => {
  return (
    <div className='loginContainer'>
      <div className='formBackgroundContainer'></div>
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
