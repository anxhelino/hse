import AuditsImage from '../../assets/images/inspection-svgrepo-com.svg';

const IssuesList = () => {
  return (
    <div className='safetyDashboardContainer'>
      <h3 className='safetyDashboardTitle'>Audits/Inspections</h3>
      <div className='emptyIssuesContainer'>
        <img src={AuditsImage} alt='issues' className='issuesImage' />
        <p className='issuesMainParagraph'>
          Track any Audits/Inspection reported by your team here
        </p>
        <p>
          Audits/Inspections created and done by your team will be listed here
        </p>
      </div>
    </div>
  );
};

export default IssuesList;
