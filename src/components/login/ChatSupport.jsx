import React from 'react';
import { ReactComponent as ChatSupportIcon } from '../../assets/images/electrical-worker-svgrepo-com.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

const ChatSupport = () => {
  return (
    <div className='chatSupportContainer'>
      <div className='chatSupportIconContainer'>
        <ChatSupportIcon className='chatSupportIcon' />
      </div>
      <div className='chatSupportText'>
        <h2 className='chatSupportTitle'>Chat Support</h2>
        <p>
          <FontAwesomeIcon icon={faHand} />
          How Can We Help You
        </p>
      </div>
    </div>
  );
};

export default ChatSupport;
