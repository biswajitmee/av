"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';



function Designer() {


    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);

    useEffect(() => {
        // Left to right
        gsap.fromTo(imageRef1.current,
            { width: '0%', left: '0' },
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


    return (
        <>
            <div className="showcase oneShowcase bg-red-500 bg-[url('/designer_bg.jpg')]">
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
                        <p className='text-3xl'>Build a quality brand <br /> worth your effort</p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Designer