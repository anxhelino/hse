const IssuesDropdown = ({ fields, labels }) => {
  return (
    <div className='actionsDropdownContainer'>
      <label htmlFor=''>{labels}</label>
      <select>
        {fields &&
          fields.map((field, i) => {
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

export default IssuesDropdown;
