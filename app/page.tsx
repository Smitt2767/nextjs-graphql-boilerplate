import VideoPlayer from '@/components/VideoPlayer';
import React from 'react';

const page = () => {
  return (
    <VideoPlayer
      title="Bunny video"
      url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      previewImage="https://images.unsplash.com/photo-1480554840075-72cbdabbf689?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      duration={634.584}
    />
  );
};

export default page;
