import React, { useState } from 'react';

const videos = [
  ';video1.mp4',
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
  'video5.mp4',
  'video6.mp4',
  'video7.mp4',
];

const SelectionCarousel = ({ onVideoSelect }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const handleClickNext = (event) => {
    event.preventDefault();
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

  return (
    <div className="selection-carousel">
      <div className="video-list">
        {visibleVideos.map((video, index) => (
          <div key={index} onClick={() => onVideoSelect(video)} className={`video-slide ${slideDirection}`}>
            <img src={`thumbnail_${video}`} alt={`Video ${index + startIndex + 1}`} />
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
