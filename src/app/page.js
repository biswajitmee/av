"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Designer from './pages/designer';
import Casual from './pages/casual';
import Athletic from './pages/athletic';

export default function Home() {

 



  return (
    <>
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
            <span>Designer</span>
            </div>
          <div className="two left_nav">
            <span>Casual</span>
          </div>
          <div className="three left_nav">
            <span>Athleisure </span>
          </div>
          <div className="four left_nav">
            <span>Lounge </span>
          </div>
          <div className="five left_nav">
            <span>High Street </span>
          </div>
          <div className="six left_nav">
            <span>  Athletic</span>
          </div>
          <div className="seven left_nav">
            <span>Swim </span>
          </div>
          <div className="eight left_nav">
            <span> Denim</span>
          </div>
          <div className="nine left_nav">
            <span> Full-fashion </span>
          </div>
          <div className="ten left_nav">
            <span>Outdoors </span>
          </div>
          <div className="eleven left_nav">
            <span> Others </span>
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

        


<Designer/>
 
 <Casual />

<Athletic />

        

      </div>
      <div class="text-white text-lg h-96 bg-amber-300">
        Full Screen Div
      </div>




    </>
  );
}
