import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const AuditFormInput = ({ inputData }) => {
  const [activeNote, setActiveNote] = useState(false);

  const toggleNote = () => {
    setActiveNote((prev) => !prev);
  };

  return (
    <div className='auditInput'>
      <p>{inputData.label}</p>
      <input
        type='text'
        className=''
        placeholder='Audit Title'
        value={inputData.value}
      />
      <div className='addConductedNote'>
        <div onClick={toggleNote}>
          <FontAwesomeIcon icon={faBook} />
          <span>Add Note</span>
        </div>
      </div>
      {activeNote && (
        <div className='addInspectionNoteContainer'>
          <textarea placeholder='Type your notes...'></textarea>
        </div>
      )}
    </div>
  );
};

export default AuditFormInput;
