import React, { useRef } from 'react';
import ActionFiltersHeader from './ActionFiltersHeader';
import ActionsButton from './ActionsButton';

import actionsImage from '../../../assets/images/7856001.jpg';
import CreateActionsModal from './CreateActionsModal';
import CreateActionForm from './CreateActionForm';
const SiteActionsContainer = () => {
  const modalRef = useRef();

  return (
    <div className='siteActionsContainer'>
      <ActionFiltersHeader />
      <ActionsButton setOpenModal={modalRef} />
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
      <CreateActionsModal ref={modalRef}>
        <CreateActionForm />
      </CreateActionsModal>
    </div>
  );
};

export default SiteActionsContainer;
