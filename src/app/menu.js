import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

const MenuAnimation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the open timeline
  const openMenuTimeline = () => {
    gsap.to('.leftPanel', {
      left: '-150px',
      duration: 0.5
    });

    gsap.fromTo('.leftBar', {
      zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff",
    }, {
      delay: 0.5, position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", duration: 1, width: '33vw'
    });

    gsap.fromTo('.righttBar', {
      zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff",
    }, {
      delay: 0.5, position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", duration: 1, width: '33vw'
    });

    gsap.fromTo('.topBar', {
      zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay: 0.5, position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1,
    });

    gsap.fromTo('.bottomBar', {
      position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay: 0.5, zIndex: '30', position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1,
    });

    gsap.to('.openMenubtn', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set('.openMenubtn', { display: 'none' });
        gsap.set('.closeMenubtn', { display: 'block' });
        gsap.to('.closeMenubtn', { opacity: 1, duration: 0.5 });
      }
    });
  };

  // Define the close timeline
  const closeMenuTimeline = () => {
    gsap.to('.leftPanel', {
      left: '20px',
      duration: 0.5
    });

    gsap.fromTo('.leftBar', {
      delay: 0.5, position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", width: '33vw'
    }, {
      zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff", duration: 1,
    });

    gsap.fromTo('.righttBar', {
      delay: 0.5, position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", width: '33vw'
    }, {
      zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff", duration: 1,
    });

    gsap.fromTo('.topBar', {
      delay: 0.5, position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1,
    });

    gsap.fromTo('.bottomBar', {
      delay: 0.5, position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      zIndex: '30', position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1,
    });

    gsap.to('.closeMenubtn', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set('.closeMenubtn', { display: 'none' });
        gsap.set('.openMenubtn', { display: 'block' });
        gsap.to('.openMenubtn', { opacity: 1, duration: 0.5 });
      }
    });
  };

  const handleMenuClick = () => {
    if (isExpanded) {
      closeMenuTimeline();
    } else {
      openMenuTimeline();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <a className="openMenubtn" onClick={handleMenuClick} style={{ opacity: 1 }}>Menu</a>
      <a className="closeMenubtn" onClick={handleMenuClick} style={{ display: 'none', opacity: 0 }}>Close <span>X</span></a>
    </>
  );
};

export default MenuAnimation;
