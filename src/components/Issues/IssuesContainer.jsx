import AddIssueButton from './AddIssueButton';
import IssuesList from './IssuesList';
import IssuesSearch from './IssuesSearch';

const IssuesContainer = () => {
  return (
    <div className='issuesContainer'>
      <div className='pageSubTitle'>
        <h1>Issues</h1>
        <AddIssueButton />
      </div>
      <div className='issuesWrapper'>
        <IssuesSearch />
        <IssuesList />
      </div>
    </div>
  );
};

export default IssuesContainer;
