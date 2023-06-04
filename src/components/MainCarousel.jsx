import React, { useState } from 'react';

const MainCarousel = ({ video }) => {
  const [selectedVideo, setSelectedVideo] = useState(video);

  return (
    <div className="main-carousel">
      {selectedVideo ? (
        <video controls className="default-video">
<source src={selectedVideo} type="video/mp4" />

        </video>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default MainCarousel;
