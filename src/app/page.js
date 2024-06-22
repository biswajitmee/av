"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Designer from './pages/designer';
import Casual from './pages/casual';
import Athleisure from './pages/athleisure';
import Lounge from './pages/lounge';
 
import CustomCursor from './pages/customCursor';

export default function Home() {





  return (
    <>
 <CustomCursor/>
 
      <nav class="absolute container z-50">
        <div class="relative container mx-auto  flex items-center justify-between">

          <div class="absolute left-0 w-24 h-12 flex items-center justify-center bg-gray-700 text-white">
            Left
          </div>


          <div class="w-24 h-12 mx-auto flex items-center justify-center bg-gray-700 text-white">
            Center
          </div>


          <div class="absolute right-0 w-24 h-12 flex items-center justify-center bg-gray-700 text-white">
            Right
          </div>
        </div>
      </nav>




      <div class="leftPanel absolute inset-0 flex items-center w-64   z-40">
        <div class="p-10 ">
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

      <div className="scrollSection">

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
      <div class="text-white text-lg h-96 bg-amber-300">
        Full Screen Div
      </div>




    </>
  );
}
