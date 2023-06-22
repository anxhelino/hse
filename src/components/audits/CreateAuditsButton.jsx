import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CreateAuditsButton = () => {
  return (
    <div className='assetsButtonContainer'>
      <Link to={'create-new-audit'} className='assetsButton'>
        <FontAwesomeIcon icon={faPlus} /> Create New Audit
      </Link>
    </div>
  );
};

export default CreateAuditsButton;
