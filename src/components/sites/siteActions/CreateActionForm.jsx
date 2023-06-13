import ActionsDropdown from './ActionsDropdown';

const dropdownValues = [
  ['Assignee: Site Owner'],
  ['Priority: Low', 'Priority: Medium', 'Priority: High'],
  ['Due: 21 Jun 2023'],
];

const CreateActionForm = () => {
  return (
    <div className='createActionFormContainer'>
      <input
        type='text'
        className='actionTitle'
        placeholder='Title of Action'
      />
      <input
        type='text'
        className='actionDescription'
        placeholder='Add description'
      />

      {dropdownValues.map((value, index) => {
        return <ActionsDropdown fields={value} key={index} />;
      })}
    </div>
  );
};

export default CreateActionForm;
