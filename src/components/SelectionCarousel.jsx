import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const videos = [
  'https://player.vimeo.com/video/499370625?h=e11b012f31',
  'https://player.vimeo.com/video/499370625?h=e11b012f31',
  'https://player.vimeo.com/video/502750801?h=295c913c01',
  'https://player.vimeo.com/video/499772935?h=19a8fdb29a',
  'https://player.vimeo.com/video/499674135?h=648bebf7a4',
  'https://player.vimeo.com/video/499674135?h=648bebf7a4',
  'https://player.vimeo.com/video/499365548?h=110368bfb9',
  'https://player.vimeo.com/video/499706753?h=0f3a3f76cc',
  'https://player.vimeo.com/video/499679264?h=9119cadefe'
];

const SelectionCarousel = ({ onVideoSelect }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const handleClickNext = () => {
    if (startIndex + 5 < videos.length) {
      setStartIndex(startIndex + 1);
      setSlideDirection('next');
    } else if (startIndex + 5 === videos.length - 1) {
      setStartIndex(startIndex + 1);
      setSlideDirection('next-last');
    }
  };

  const handleClickPrev = () => {
    if (startIndex >= 1) {
      setStartIndex(startIndex - 1);
      setSlideDirection('prev');
    } else if (startIndex === 1) {
      setStartIndex(0);
      setSlideDirection('prev-first');
    }
  };

  const visibleVideos = videos.slice(startIndex, startIndex + 5);

  useEffect(() => {
    const autoplayTimer = setTimeout(() => {
      handleClickNext();
    }, 5000);

    return () => {
      clearTimeout(autoplayTimer);
    };
  }, [startIndex]);

  const handleVideoSelect = (video) => {
    onVideoSelect(video);
  };

  const handleVideoEnded = () => {
    handleClickNext();
  };

  return (
    <div className="selection-carousel">
      <div className="video-list">
        {visibleVideos.map((video, index) => (
          <div key={index} onClick={() => handleVideoSelect(video)} className={`video-slide ${slideDirection}`}>
            <ReactPlayer
              url={video}
              width="100%"
              height="auto"
              controls={false}
              playing={index === 0}
              autoplayTimer
              onEnded={handleVideoEnded}
            />
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <button onClick={handleClickPrev} disabled={startIndex === 0}>
          Prev
        </button>
        <button onClick={handleClickNext} disabled={startIndex + 5 >= videos.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectionCarousel;
