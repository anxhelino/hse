import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SafetyDashboardCard = ({ value, icon, text }) => {
  return (
    <div className='safetyDashboardCard'>
      <h1>{value}</h1>
      <div>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SafetyDashboardCard;
