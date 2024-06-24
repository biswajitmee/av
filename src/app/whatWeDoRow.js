"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function WhatWeRow({ rowClass, videoSrc, title, description }) {

  const compresDivRef = useRef(null);
  const heightsDivRef = useRef(null);

  useEffect(() => {
    const expandBoxImg = () => {
      gsap.killTweensOf(compresDivRef.current);
      gsap.killTweensOf(heightsDivRef.current);

      gsap.fromTo(heightsDivRef.current,
        { height: '260px' },
        { height: '350px', duration: 1, ease: "power4.out" }
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
        { height: '350px', duration: 1, ease: "power4.out" },
        { height: '260px' }
      );
      gsap.to(compresDivRef.current,
        { height: '0%', duration: 1, ease: "power4.out" }
      );
    };

    const spanElement = document.querySelector(`.${rowClass}`);
    if (spanElement) {
      spanElement.addEventListener('mouseenter', expandBoxImg);
      spanElement.addEventListener('mouseleave', collpsBoxImg);
    }
    return () => {
      if (spanElement) {
        spanElement.removeEventListener('mouseenter', expandBoxImg);
        spanElement.removeEventListener('mouseleave', collpsBoxImg);
      }
    };
  }, [rowClass]);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 whtdo bordr py-12 ${rowClass}`} ref={heightsDivRef}>
      <div className="p-4 flex flex-col justify-end">
        <p className="text-5xl text-black">{title}</p>
      </div>
      <div className="p-4 flex flex-col justify-end ">
        <div className='revelCover'>
          <div ref={compresDivRef} className='revelDiv'>
            <div className="revelImg">
              {/* <img src='designer_box.jpg' alt="Designer Box" className='object-cover h-full w-auto' /> */}
              <video
                className='object-cover h-full w-auto'
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
        <p className="text-lg text-black">{description}</p>
      </div>
    </div>
  );
}

export default WhatWeRow;
