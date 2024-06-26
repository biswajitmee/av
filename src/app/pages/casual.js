"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Casual() {
    const twoShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showtwoShowcase = () => {


            
            gsap.killTweensOf(twoShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            
            gsap.fromTo(twoShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.1, opacity:1 }
            );

            gsap.fromTo(compresDivRef.current,
                { width: '0%', right: '0', left: 'auto' },
                { width: '100%', duration: 1, ease: "power4.out" }
            );

            gsap.fromTo(compresTextRef.current,
                {opacity:0, x:-200},
                {opacity:1,x:0, duration:0.5 }
            );


        };

        const hidetwoShowcase = () => {


            gsap.killTweensOf(twoShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);


            gsap.to(twoShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.to(compresDivRef.current,
                { width: '0%', duration: 1, ease: "power4.out" }
            );

            gsap.fromTo(twoShowcaseRef.current,               
                { display: 'block', duration: 0.2,  },
                { display: 'none', opacity:0, duration: 0.5, }
            );

        };

        const spanElement = document.querySelector('.two');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showtwoShowcase);
            spanElement.addEventListener('mouseleave', hidetwoShowcase);
        }

        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showtwoShowcase);
                spanElement.removeEventListener('mouseleave', hidetwoShowcase);
            }
        };
    }, []);

    return (
        <div ref={twoShowcaseRef} className="showcase twoShowcase bg-red-500 bg-[url('/casual_bg.jpg')] hidden">
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl'>
                    Casual
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImg bg-[url('/casual_box.jpg')]">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
        </div>
    );
}

export default Casual;
