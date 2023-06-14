import ActionsDropdown from './ActionsDropdown';

const dropdownValues = [
  ['Assignee: Site Owner'],
  ['Priority: Low', 'Priority: Medium', 'Priority: High'],
  ['Due: 21 Jun 2023'],
];
const labels = ['Assignee', 'Set Priority', 'Due Date'];

const CreateActionForm = () => {
  return (
    <>
      <div className='createActionFormContainer'>
        <div>
          <input
            type='text'
            className='actionTitle'
            placeholder='Title of Action'
          />
        </div>
        <div>
          <input
            type='text'
            className='actionDescription'
            placeholder='Add description'
          />
        </div>
        <label htmlFor='assignTo'>Assign To: </label>
        <input
          id='assignTo'
          type='text'
          className='actionAssigned'
          placeholder='Assign action'
        />

        {dropdownValues.map((value, index) => {
          return (
            <ActionsDropdown
              fields={value}
              labels={labels[index]}
              key={index}
            />
          );
        })}
        <button className='actionButton'>Create</button>
      </div>
    </>
  );
};

export default CreateActionForm;
