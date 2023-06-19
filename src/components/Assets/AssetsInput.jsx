const AssetsInput = ({ text }) => {
  return (
    <div className='createAssetsInput'>
      <p>{text.text}</p>
      <input type='text' />
    </div>
  );
};

export default AssetsInput;
