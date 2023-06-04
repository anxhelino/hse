import React from 'react';

const InputText = ({ text }) => {
  return (
    <div className='inputRow'>
      <span>{text}</span>
      <input type='text' placeholder={text} />
    </div>
  );
};

export default InputText;
