
import React from 'react';
import sundownVideo from './assets/sundown.mp4'; 

const Video = () => {
  return (
    <div className='p-12 relative'>
      <video
        autoPlay
        loop
        muted
        src={sundownVideo}
        className='rounded-2xl pointer-events-none'
        controls
      ></video>
    </div>
  );
};

export default Video;
