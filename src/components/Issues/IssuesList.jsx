import React from 'react';
import IssuesImage from '../../assets/images/tracking-track-svgrepo-com.svg';

const IssuesList = () => {
  return (
    <div className='safetyDashboardContainer'>
      <h3 className='safetyDashboardTitle'>Issues</h3>
      <div className='emptyIssuesContainer'>
        <img src={IssuesImage} alt='issues' className='issuesImage' />
        <p className='issuesMainParagraph'>
          Track any issues reported by your team here
        </p>
        <p>
          Anyone can report issues and quickly capture the critical details
          about what happened.
        </p>
      </div>
    </div>
  );
};

export default IssuesList;
