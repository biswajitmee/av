"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
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
import WhatWeDo from './whatWeDo';
import MenuAnimation from './menu';
import KeyFeature from './keyFeature';

import CardCarousel from './CardCarousel';
import Highstreet from './pages/highstreet';
import Athletic from './pages/athletic';
import Swim from './pages/swim';
import Denim from './pages/denim';
import Fullfashion from './pages/fullfashion';
import Outdoors from './pages/outdoors';
import Others from './pages/others';

const images = {
  Designer: 'designer_box.jpg',
  Casual: 'casual_box.jpg',
  Athleisure: 'athleisure_box.jpg',
  Lounge: 'lounge_box.jpg',
  HighStreet: 'highstreet_box.jpg',
  Athletic: 'athletics_box.jpg',
  Swim: 'swim_box.jpg',
  Denim: 'denim_box.jpg',
  Fullfashion: 'fullfashion_box.jpg',
  Outdoors: 'outdoors_box.jpg'
};

export default function Home() {
  const main = useRef();
  const smoother = useRef();
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuItems = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      menuItems.current.forEach((item) => {
        const underline = item.querySelector('.underline');
        const textWidth = item.offsetWidth;


        item.addEventListener('mouseenter', () => {
          gsap.fromTo(underline,
            { width: '0', duration: 0.5, left: 0 },
            { width: textWidth, duration: 0.5, left: 0 });
        });

        item.addEventListener('mouseleave', () => {
          gsap.fromTo(underline,
            { width: textWidth, duration: 0.5, right: 0 },
            { width: '0', duration: 0.5, right: 0 }
          );
        });
      });


    }, main);
    return () => ctx.revert();


  }, []);

  return (
    <>
      <CustomCursor />
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <nav className="absolute container z-50 mt-3 bg-black">
            <div className="relative container mx-auto flex items-center justify-between">
              <div className="absolute left-0 h-12 flex items-center justify-center">
                <MenuAnimation />
              </div>
              <div className="logo w-24 h-12 mx-auto flex items-center justify-center">
                <img src='./logo_av.svg' alt="Logo" />
              </div>
              <div className="absolute right-0 mr-4 h-12 flex items-center justify-center">
                <a href="#" className="schdule">Schedule a call</a>
              </div>
            </div>
          </nav>

          <div className="leftPanel absolute inset-0 flex items-center w-64 h-full z-40">
            <div className="pl-3 ">
              <div className="one left_nav">
                <a>Designer</a>
              </div>
              <div className="two left_nav">
                <a>Casual</a>
              </div>
              <div className="three left_nav">
                <a>Athleisure</a>
              </div>
              <div className="four left_nav">
                <a>Lounge</a>
              </div>
              <div className="five left_nav">
                <a>High Street</a>
              </div>
              <div className="six left_nav">
                <a>Athletic</a>
              </div>
              <div className="seven left_nav">
                <a>Swim</a>
              </div>
              <div className="eight left_nav">
                <a>Denim</a>
              </div>
              <div className="nine left_nav">
                <a>Full-fashion</a>
              </div>
              <div className="ten left_nav">
                <a>Outdoors</a>
              </div>
              <div className="eleven left_nav">
                <a>Others</a>
              </div>
            </div>
          </div>
          <div className="leftPanel2 absolute inset-0 flex items-center w-64 z-40">
            <div className="pl-3">
              <div className='menuContent'>
                <li ref={el => menuItems.current[0] = el} className="menuItem">
                  What We Do
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[1] = el} className="menuItem">
                  About Us
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[2] = el} className="menuItem">
                  Latest News
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[3] = el} className="menuItem">
                  Get in Touch
                  <div className="underline"></div>
                </li>
              </div>


              {Object.keys(images).map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="left_nav"
                >
                  <a>{item}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="ShowCaseSection">
            <div className="showcase w-full h-full inset-0">
              <div className="leftBar"></div>
              <div className="righttBar"></div>
              <div className="topBar"></div>
              <div className="bottomBar"></div>
              <div className="cornerShowcase z-50">
                <div className="absolute top-0 left-0 z-50">
                  <img src="corner-left-top-2.svg" alt="top-left corner" className="w-8 h-8" />
                </div>
                <div className="absolute top-0 right-0 z-50">
                  <img src="corner-right-top-2.svg" alt="top-right corner" className="w-8 h-8" />
                </div>
                <div className="absolute bottom-0 left-0 z-50">
                  <img src="corner-left-bottom-2.svg" alt="bottom-left corner" className="w-8 h-8" />
                </div>
                <div className="absolute bottom-0 right-0 z-50">
                  <img src="corner-right-bottom-2.svg" alt="bottom-right corner" className="w-8 h-8" />
                </div>

                {Object.keys(images).map((item, index) => (
                  <img
                    key={index}
                    src={images[item]}
                    alt={item}
                    className={`cornerBox absolute w-64 h-auto transition-opacity duration-300 ${hoveredItem === item ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                  />
                ))}
              </div>

              <div className='videoCover'>
                <video
                  className="w-full h-full object-cover coverVideo"
                  src="bg_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className='intro'>Since 2006, we’ve been manufacturing clothing in Los Angeles for the
                  most innovative designer brands, creating, building, and delivering apparel worth talking about.</div>
                <div className='introHeading'>
                  <div>We produce </div>
                  <div className='text-right'>luxury cloth</div>
                </div>
              </div>
            </div>
            <Designer />
            <Casual />
            <Athleisure />
            <Lounge />
            <Highstreet />
            <Athletic />
            <Swim />
            <Denim />
            <Fullfashion />
            <Outdoors />
            <Others />
          </div>
          <div className="ScrollSection bg-white pt-5 pb-5">
            <LogoScroller />
            <WhatWeDo />
          </div>
          <KeyFeature />
          <CardCarousel />
          <div class="flex flex-row h-96 bg-orange-400">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
          </div>
        </div>
      </div>
    </>
  );
}
