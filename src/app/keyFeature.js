import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function keyFeature() {

    const divs = useRef([]);

    useEffect(() => {
        divs.current.forEach((div) => {
            div.addEventListener('mouseenter', () => {
                gsap.to(div, { flexGrow: 3, duration: 0.5 });
            });

            div.addEventListener('mouseleave', () => {
                gsap.to(divs.current, { flexGrow: 1, duration: 0.5 });
               
            });
        });
    }, []);


 

    return (
        <>

            <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row ">
                <div ref={el => divs.current[0] = el} class="grow h-80  " >

                    <div className='md:cutout lg:cutout lg:border-none md:border-none' >

                        <div class="flex flex-col items-stretch  sm:grid grid-cols-2   md:grid-cols-2  lg:grid-cols-2  h-60 ">

                            <div className='grow flex items-stretch'>
                                <div className='self-start pl-6'>01</div>
                                <div className='self-end text-left'>Early Stage</div>
                            </div>

                            <div className='self-end'>We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We'll walk you through it in our introduction meeting.</div>

                        </div>


                    </div>

                </div>
                <div ref={el => divs.current[1] = el} class="grow h-80  ">

                 
                    <div className='md:cutout lg:cutout'>

                        <div class="flex flex-col items-stretch  sm:grid grid-cols-2   md:grid-cols-2  lg:grid-cols-2  h-60 ">

                            <div className='grow flex items-stretch'>
                                <div className='self-start pl-6'>02</div>
                                <div className='self-end text-left'>Trust</div>
                            </div>

                            <div className='self-end'>We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We'll walk you through it in our introduction meeting.</div>

                        </div>
                        </div>

                  
                </div>
                <div ref={el => divs.current[2] = el} class="grow h-80   ">
                    <div className='md:cutout lg:cutout'>

                        <div class="flex flex-col items-stretch  sm:grid grid-cols-2   md:grid-cols-2  lg:grid-cols-2  h-60 ">

                            <div className='grow flex items-stretch'>
                                <div className='self-start pl-6'>03</div>
                                <div className='self-end text-left'>Loyalty</div>
                            </div>

                            <div className='self-end'>We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We'll walk you through it in our introduction meeting.</div>

                        </div>


                    </div>
                </div>
                <div ref={el => divs.current[3] = el}  class="grow h-80  ">
                    <div className='md:cutout lg:cutout'>

                        <div class="flex flex-col items-stretch  sm:grid grid-cols-2   md:grid-cols-2  lg:grid-cols-2  h-60 ">

                            <div className='grow flex items-stretch'>
                                <div className='self-start pl-6'>04</div>
                                <div className='self-end text-left'>Quality</div>
                            </div>

                            <div className='self-end'>We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We'll walk you through it in our introduction meeting.</div>

                        </div>


                    </div>
                </div>
                <div ref={el => divs.current[4] = el}  class="grow h-80   ">
                    <div className='md:cutout lg:cutout'>

                        <div class="flex flex-col items-stretch  sm:grid grid-cols-2   md:grid-cols-2  lg:grid-cols-2  h-60 ">

                            <div className='grow flex items-stretch'>
                                <div className='self-start pl-6'>05</div>
                                <div className='self-end text-left'>Expenditure</div>
                            </div>

                            <div className='self-end'>We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We'll walk you through it in our introduction meeting.</div>

                        </div>


                    </div>
                </div>
                <div ref={el => divs.current[5] = el}  class="grow h-80 ">
                    <div className='md:cutout lg:cutout'>

                        <div class="flex flex-col items-stretch  sm:grid grid-cols-2   md:grid-cols-2  lg:grid-cols-2  h-60 ">

                            <div className='grow flex items-stretch'>
                                <div className='self-start pl-6'>06</div>
                                <div className='self-end text-left'>Success</div>
                            </div>

                            <div className='self-end '>We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We'll walk you through it in our introduction meeting.</div>

                        </div>


                    </div>
                </div>
            </div>




        </>
    )
}

export default keyFeature