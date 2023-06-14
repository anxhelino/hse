import React from 'react';

const ActionsDropdown = ({ fields, labels }) => {
  console.log(labels);
  return (
    <div className='actionsDropdownContainer'>
      <label htmlFor=''>{labels}</label>
      <select>
        {fields.map((field, i) => {
          return (
            <>
              <option value={i}>{field}</option>)
            </>
          );
        })}
      </select>
    </div>
  );
};

export default ActionsDropdown;
