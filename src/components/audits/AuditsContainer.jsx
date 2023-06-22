import AuditsSearch from './AuditsSearch';
import AuditsList from './AuditsList';
import CreateAuditsButton from './CreateAuditsButton';

const AuditsContainer = () => {
  return (
    <>
      <div className='issuesContainer'>
        <div className='pageSubTitle'>
          <h1>Audits/Inspections</h1>
          <CreateAuditsButton />
        </div>
        <div className='issuesWrapper'>
          <AuditsSearch />
          <AuditsList />
        </div>
      </div>
    </>
  );
};

export default AuditsContainer;
