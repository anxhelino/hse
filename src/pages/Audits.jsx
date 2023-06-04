import React, { useState } from 'react';
import MainCarousel from '../components/MainCarousel';
import SelectionCarousel from '../components/SelectionCarousel';


const videos = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  // Add more videos here
];

const Audits = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="audits-container">
    <MainCarousel video={selectedVideo} />
      <SelectionCarousel videos={videos} onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default Audits;
