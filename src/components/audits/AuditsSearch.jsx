import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const AuditsSearch = () => {
  return (
    <div className='actionsSearchContainer'>
      <FontAwesomeIcon icon={faSearch} />
      <input type='text' placeholder='Search...' className='actionsSearch' />
    </div>
  );
};
export default AuditsSearch;
