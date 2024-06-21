"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Home() {

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    // Left to right
    gsap.fromTo(imageRef1.current,
      { width: '0%', left:'0' },
      { width: '100%', duration: 1, ease: "power4.out", }
    );

    // Right to left
    gsap.fromTo(imageRef2.current,
      { width: '0%', right: '0', left: 'auto' },
      { width: '100%', duration: 1, ease: "power4.out", }
    );

    // Bottom to top
    gsap.fromTo(imageRef3.current,
      { height: '0%', bottom: '0', top: 'auto' },
      { height: '100%', duration: 1, ease: "power4.out", }
    );
  }, []);

  // useEffect(() => {
  //   const designer = gsap.timeline( );
  //   designer
  //     .from('.oneShowcase', 
  //       { opacity: 0, display: 'none',  },         
  //     )
  //     .to('.oneShowcase', 
  //       { opacity: 1, display: 'block', duration: 0, ease: 'power1.in',zIndex:999 }
  //     );
  //   const handleDesignerEnter = () => {
  //     designer.restart();
  //   };
  //   const handleDesignerLeave = () => {
  //     designer.reverse();
  //   };
  //   document.querySelector('.one').addEventListener('mouseenter', handleDesignerEnter);
  //   document.querySelector('.one').addEventListener('mouseleave', handleDesignerLeave);

  //   return () => {
  //     document.querySelector('.one').removeEventListener('mouseenter', handleDesignerEnter);
  //     document.querySelector('.one').removeEventListener('mouseleave', handleDesignerLeave);
  //   };

  // }, []);



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
            <span>Designer</span></div>
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

        {/* <div className="showcase threeShowcase">
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
        </div> */}

        <div className="showcase oneShowcase bg-red-500 bg-[url('/designer_bg.jpg')]">

          {/* <div class="flex justify-center  ">
            <div className='pt-24 pr-10 sansita text-6xl'>Designer</div>
            <div className='pt-20'>
             <div className="compresImg  bg-[url('/box1.svg')]"> </div> 
             <p className='text-3xl'>Build a quality brand <br></br> worth your effort</p>
            </div>
          </div> */}

          <div className="flex flex-col lg:flex-row justify-center ">
            <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl'>
              Designer
            </div>
            <div className='pt-20 lg:pt-20'>
            <div className='compresCover'> 
              <div className='compresDiv' ref={imageRef2}>
                <div className="compresImg   bg-[url('/box1.svg')]" >
</div>
                </div>
              </div>


              {/* <div className="relative w-full h-full overflow-hidden ">
                <div className="absolute top-0 left-0 h-full" ref={imageRef2}>
                  <img src='/box1.svg' alt="Left to Right" className="object-cover w-full h-full" />
                </div>
              </div> */}
              <p className='text-3xl'>Build a quality brand <br /> worth your effort</p>
            </div>
          </div>


        </div>
        {/* <div className="showcase twoShowcase bg-green-400">



        </div>
        <div className="showcase threeShowcase bg-blue-600">



        </div> */}

      </div>
      <div class="text-white text-lg h-96 bg-amber-300">
        Full Screen Div
      </div>




    </>
  );
}
