"use client";
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import Designer from './pages/designer';
import Casual from './pages/casual';
import Athleisure from './pages/athleisure';
import Lounge from './pages/lounge';
import CustomCursor from './pages/customCursor';
import LogoScroller from './brandHorizentalAnimation';

export default function Home() {
  const main = useRef();
  const smoother = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">

          <nav className="absolute container z-50 mt-8">
            <div className="relative container mx-auto flex items-center justify-between">
              <div className="absolute left-0 w-24 h-12 flex items-center justify-center">
                <a href="#" className="menuButton">Menu</a>
              </div>
              <div className="w-24 h-12 mx-auto flex items-center justify-center">
                <img src='./logo_av.svg' alt="Logo" />
              </div>
              <div className="absolute right-0 w-40 mr-4 h-12 flex items-center justify-center">
                <a href="#" className="schdule">Schedule a call</a>
              </div>
            </div>
          </nav>

          <div class="leftPanel absolute inset-0 flex items-center w-64   z-40">
            <div class="pl-3 ">
              <div className="one left_nav">
                <a>Designer</a>
              </div>
              <div className="two left_nav">
                <a>Casual</a>
              </div>
              <div className="three left_nav">
                <a>Athleisure </a>
              </div>
              <div className="four left_nav">
                <a>Lounge </a>
              </div>
              <div className="five left_nav">
                <a>High Street </a>
              </div>
              <div className="six left_nav">
                <a>  Athletic</a>
              </div>
              <div className="seven left_nav">
                <a>Swim </a>
              </div>
              <div className="eight left_nav">
                <a> Denim</a>
              </div>
              <div className="nine left_nav">
                <a> Full-fashion </a>
              </div>
              <div className="ten left_nav">
                <a>Outdoors </a>
              </div>
              <div className="eleven left_nav">
                <a> Others </a>
              </div>
            </div>
          </div>


          <div className="ShowCaseSection">
            <div className="showcase threeShowcase">
              <div className="showcase w-full h-full">
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
            <Designer />
            <Casual />
            <Athleisure />
            <Lounge />
          </div>


          <div className="ScrollSection bg-white pt-5 pb-5 ">

            <LogoScroller />  
            <p className="flex justify-center items-center text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl h-60 sm:h-96 md:h-96">
              Odds are you’ve worn a<br /> product we’ve made
            </p>

          </div>


          <div className='h-96'> customer curser not working here </div>
        </div>
      </div>
    </>
  );
}
