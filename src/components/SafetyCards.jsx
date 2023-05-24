import GreenSafetyCard from './GreenSafetyCard';
import YellowSafetyCard from './YellowSafetyCard';
import RedSafetyCard from './RedSafetyCard';

const SafetyCards = () => {
  return (
    <div className='safetyCardContainer'>
      <div className='safetyCardInfo'>
        <h3>Your Safety Cards</h3>
        <span>What is a safety card?</span>
      </div>

      <GreenSafetyCard />
      <YellowSafetyCard />
      <RedSafetyCard />
    </div>
  );
};

export default SafetyCards;
