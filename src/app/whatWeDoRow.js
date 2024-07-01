"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function WhatWeRow({ rowClass, videoSrc, title, description }) {

  const compresDivRef = useRef(null);
  const heightsDivRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)'); // 1024px and above

    const expandBoxImg = () => {
      gsap.killTweensOf(compresDivRef.current);
      gsap.killTweensOf(heightsDivRef.current);

      gsap.fromTo(heightsDivRef.current,
        { height: '260px',  backgroundColor:'#fff' },
        { height: '350px', duration: 1, ease: "power4.out", backgroundColor:'#F6FAFF' }
      );
      gsap.fromTo(compresDivRef.current,
        { height: '0%', bottom: '0', position: 'absolute' },
        { height: '225px', bottom: '0', duration: 1, ease: "power4.out" }
      );
    };

    const collpsBoxImg = () => {
      gsap.killTweensOf(compresDivRef.current);
      gsap.killTweensOf(heightsDivRef.current);

      gsap.fromTo(heightsDivRef.current,
        { height: '350px', duration: 1, ease: "power4.out", backgroundColor:'#F6FAFF' },
        { height: '260px', backgroundColor:'#fff'  }
      );
      gsap.to(compresDivRef.current,
        { height: '0%', duration: 1, ease: "power4.out" }
      );
    };

    const addHoverEvents = () => {
      const spanElement = document.querySelector(`.${rowClass}`);
      if (spanElement) {
        spanElement.addEventListener('mouseenter', expandBoxImg);
        spanElement.addEventListener('mouseleave', collpsBoxImg);
      }
    };

    const removeHoverEvents = () => {
      const spanElement = document.querySelector(`.${rowClass}`);
      if (spanElement) {
        spanElement.removeEventListener('mouseenter', expandBoxImg);
        spanElement.removeEventListener('mouseleave', collpsBoxImg);
      }
    };

    if (mediaQuery.matches) {
      addHoverEvents();
    }

    const handleMediaChange = (e) => {
      if (e.matches) {
        addHoverEvents();
      } else {
        removeHoverEvents();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      removeHoverEvents();
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [rowClass]);

  return (

<> 

    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 whtdo bordr py-12 ${rowClass}`} ref={heightsDivRef}>
      <div className="p-4 flex flex-col justify-end">
        <p className="text-4xl text-black font-light	">{title}</p>
      </div>
      <div className="p-4 flex flex-col justify-end ">
        <div className='md:revelCover relative'>
          <div ref={compresDivRef} className='md:revelDiv relative'>
            <div className='revelImgxs md:revelImg relative'>
              <video
                className='md:object-cover md:h-full md:w-auto'
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-end">
        <p className="text-lg text-black ">{description}</p>
      </div>
    </div>
    </>
  );
}

export default WhatWeRow;
