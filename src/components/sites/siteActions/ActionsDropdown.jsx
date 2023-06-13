import React from 'react';

const ActionsDropdown = ({ fields }) => {
  return (
    <div className='actionsDropdownContainer'>
      <select>
        {fields.map((field, i) => {
          return <option value={i}>{field}</option>;
        })}
      </select>
    </div>
  );
};

export default ActionsDropdown;
