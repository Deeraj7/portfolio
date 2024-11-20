import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrolled / total) * 100);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;