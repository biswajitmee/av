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
       position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", duration: 1, width: '34vw', ease: "power4.in",
    });

    gsap.fromTo('.righttBar', {
      zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff",
    }, {
    position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", duration: 1, width: '34vw',ease: "power4.in",
    });

    gsap.fromTo('.topBar', {
      zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
       position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1,ease: "power4.in",
    });

    gsap.fromTo('.bottomBar', {
      position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
       zIndex: '30', position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1,ease: "power4.in",
    });

    gsap.fromTo('.cornerShowcase',
      {display:'none'},
       {delay:1, display:'block'});

    // gsap.to({}, {
   
    //   delay: 0.9,
    //   onComplete: function () {
    //     const smallElement = document.getElementById("small");
    //     smallElement.classList.add("small");
    //     gsap.to(smallElement, { scale: 0.99, duration: 0.1 });  // Add scale animation
    //   }
    // });
    //   gsap.to({}, {
      
    //     delay:0.9,
    //     onComplete: function() {
    //       document.getElementById("big").classList.add("big");
    //     }
    //   });

      // gsap.to('.small',          
      //   {scale:0.2, delay:1.1, duration:2});


      // gsap.to({}, {
      //   duration: 0,
      //   delay:0.5,
      //   onComplete: function() {
      //     document.getElementById("whitesppace").classList.add("whitesppace");
      //   }
      // });


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

    gsap.fromTo('.cornerShowcase',
      {delay:0,display:'block'},
       {delay:0,display:'none'});

    gsap.fromTo('.leftBar', {
     position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", width: '34vw'
    }, {
      delay:0.5, zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff", duration: 0.7, ease: "power1.out",
    });

    gsap.fromTo('.righttBar', {
       position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", width: '34vw'
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff", duration: 0.7,ease: "power1.out",
    });

    gsap.fromTo('.topBar', {
    position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 0.7,ease: "power1.out",
    });

    gsap.fromTo('.bottomBar', {
       position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 0.7,ease: "power1.out",
    });

   


    // gsap.to({}, {
    //   duration: 0,
    //   delay: 0,
    //   onComplete: function () {
    //     const smallElement = document.getElementById("small");
    //     gsap.to(smallElement, {
    //       scale: 1, // Reset scale to default
    //       duration: 0,
    //       onComplete: function() {
    //         smallElement.classList.remove("small");
    //       }
    //     });
    //   }
    // });
    //   gsap.to({}, {
    //     duration: 0,
    //     delay: 0,
    //     onComplete: function() {
    //       document.getElementById("big").classList.remove("big");
    //     }
    //   });

      // gsap.to({}, {
      //   duration: 0,
      //   delay:0.5,
      //   onComplete: function() {
      //     document.getElementById("whitesppace").classList.remove("whitesppace");
      //   }
      // });



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
