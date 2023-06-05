import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const MainCarousel = ({ video }) => {
  const [playing, setPlaying] = useState(false);
  const defaultVideo = video || 'https://player.vimeo.com/video/499370625?h=e11b012f31';

  useEffect(() => {
    setPlaying(true);
  }, []);

  const handleReady = () => {
    setPlaying(true);
  };

  const handleStart = () => {
    setPlaying(true);
  };

  return (
    <div className="main-carousel">
      <ReactPlayer
        url={defaultVideo}
        controls
        playing={playing}
        onReady={handleReady}
        onStart={handleStart}
      />
    </div>
  );
};

export default MainCarousel;
