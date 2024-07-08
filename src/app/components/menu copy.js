import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

const MenuAnimation = () => {
  const menuRef = useRef(null);
  const openTimeline = useRef(null);
  const closeTimeline = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useLayoutEffect(() => {
    // Define the open timeline
    openTimeline.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        width: '33vw', height: '80vh', position: 'absolute', top: '10vh', left: '33vw', overflow: 'hidden', duration: 2
      });

    // Define the close timeline
    closeTimeline.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0', duration: 2
      });

    // Initial animation
    gsap.set(menuRef.current, {
      width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0'
    });
  }, []);

  const handleMenuClick = () => {
    if (isExpanded) {
      closeTimeline.current.restart();
    } else {
      openTimeline.current.restart();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className='h-8 mt-2'>
        <button className="menuButton" onClick={handleMenuClick}>Menu</button>
      </div>

      <div className="relative w-full h-[100vh]">
        <div className="absolute inset-0 bg-indigo-500"></div>

        <div className="small" ref={menuRef}>
          <div className="big">
            <video
              className="w-full h-full object-cover"
              src="bg_video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAnimation;
