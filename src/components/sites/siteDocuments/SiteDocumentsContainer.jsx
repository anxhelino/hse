import React from 'react';
import DragDropFile from './DragDropFile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SiteDocumentsContainer = () => {
  return (
    <div className='documentsContainer'>
      <div className='uploadDocumentContainer'>
        <div className='uploadDocumentTitle'>
          <h3>Upload Documents</h3>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className='uploadDocuments'>
          <DragDropFile />
        </div>
      </div>
    </div>
  );
};

export default SiteDocumentsContainer;
