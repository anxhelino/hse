import React from 'react';

const MainCarousel = ({ video }) => {
  return (
    <div className="main-carousel">
      {video ? (
        <video controls className="default-video">
          <source src={"video"} type="video/mp4" />
        </video>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default MainCarousel;
