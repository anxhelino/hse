import React from 'react';
import ActionFiltersHeader from './ActionFiltersHeader';
import ActionsButton from './ActionsButton';
import actionsImage from '../../../assets/images/7856001.jpg';

const SiteActionsContainer = () => {
  return (
    <div className='siteActionsContainer'>
      <ActionFiltersHeader />
      <ActionsButton />
      <div className='actionsImage'>
        <img src={actionsImage} alt='actions' />
        <p className='actionsMainParagraph'>
          Turn issues into actions and resolve them as a team
        </p>
        <p>
          Any actions created from an inspection or within the app will appear
          here.
        </p>
      </div>
    </div>
  );
};

export default SiteActionsContainer;
