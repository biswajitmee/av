"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Others() {
    const elevenShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showElevenShowcase = () => {
            gsap.fromTo(elevenShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.5, opacity:1 }
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

        const hideElevenShowcase = () => {


            gsap.killTweensOf(elevenShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);


            gsap.to(elevenShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.to(compresDivRef.current,
                { width: '0%', duration: 1, ease: "power4.out" }
            );
        };

        const spanElement = document.querySelector('.eleven');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showElevenShowcase);
            spanElement.addEventListener('mouseleave', hideElevenShowcase);
        }

        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showElevenShowcase);
                spanElement.removeEventListener('mouseleave', hideElevenShowcase);
            }
        };
    }, []);

    return (
        <div ref={elevenShowcaseRef} className="showcase oneShowcase bg-red-500 bg-[url('/outdoors_bg.jpg')] hidden">
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Others
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImg bg-[url('/outdoors_box.jpg')]">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
        </div>
    );
}

export default Others;
