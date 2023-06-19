import DragDropFile from '../sites/siteDocuments/DragDropFile';
import AssetsInput from './AssetsInput';
import ActionsDropdown from '../sites/siteActions/ActionsDropdown';

const data = [
  {
    text: 'Unique ID *',
  },
];

const dropDown = [
  {
    text: 'Type *',
  },
  {
    text: 'Site *',
  },
];

const CreateNewAssetContainer = () => {
  return (
    <div className='assetsContainer'>
      <div className='pageSubTitle'>
        <h1>Add Asset</h1>
        <button className='cancelCreateAsset'>Cancel</button>
      </div>
      <form>
        <div className='leftSideForm'>
          <DragDropFile />
          {data.map((text) => {
            return <AssetsInput text={text} />;
          })}
          {dropDown.map((text) => (
            <ActionsDropdown labels={text.text} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default CreateNewAssetContainer;
