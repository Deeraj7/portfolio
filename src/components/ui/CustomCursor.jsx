// src/components/ui/CustomCursor.jsx
import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorCircleRef = useRef(null);

  useEffect(() => {
    const cursor = cursorDotRef.current;
    const circle = cursorCircleRef.current;
    
    const moveCursor = ({ clientX, clientY }) => {
      const mouseX = clientX;
      const mouseY = clientY;
      
      cursor.style.cssText = `translate: ${mouseX}px ${mouseY}px`;
      circle.style.cssText = `translate: ${mouseX}px ${mouseY}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-blue-400 
          rounded-full pointer-events-none z-[9999] mix-blend-difference
          -translate-x-1/2 -translate-y-1/2"
        style={{ transition: 'none' }}
      />
      
      {/* Star shape */}
      <div
        ref={cursorCircleRef}
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] 
          -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ 
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          background: 'rgb(96, 165, 250)',
          transition: 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;