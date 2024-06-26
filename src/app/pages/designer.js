"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Designer() {
    const oneShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showOneShowcase = () => {

            gsap.killTweensOf(oneShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            
            gsap.fromTo(oneShowcaseRef.current,
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

        const hideOneShowcase = () => {

            gsap.killTweensOf(oneShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);


            gsap.to(oneShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.to(compresDivRef.current,
                { width: '0%', duration: 1, ease: "power4.out" }
            );

            gsap.fromTo(oneShowcaseRef.current,
                { display: 'block', duration: 0.2, opacity:1 },
                { display: 'none', opacity:0, duration: 0.5, }
               
            );
        };

        const spanElement = document.querySelector('.one');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showOneShowcase);
            spanElement.addEventListener('mouseleave', hideOneShowcase);
        }
        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showOneShowcase);
                spanElement.removeEventListener('mouseleave', hideOneShowcase);
            }
        };


        
    }, []);

    return (
        <div ref={oneShowcaseRef} className="showcase oneShowcase bg-red-500 bg-[url('/designer_bg.jpg')] hidden">
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl'>
                    Designer
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImg bg-[url('/designer_box.jpg')]">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
        </div>
    );
}

export default Designer;




