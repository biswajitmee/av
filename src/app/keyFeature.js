import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const KeyFeature = () => {
  const divs = useRef([]);

  const keyFeatures = [
    { id: 1, title: 'Early Stage', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We\'ll walk you through it in our introduction meeting.' },
    { id: 2, title: 'Trust', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We\'ll walk you through it in our introduction meeting.' },
    { id: 3, title: 'Loyalty', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We\'ll walk you through it in our introduction meeting.' },
    { id: 4, title: 'Quality', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We\'ll walk you through it in our introduction meeting.' },
    { id: 5, title: 'Expenditure', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We\'ll walk you through it in our introduction meeting.' },
    { id: 6, title: 'Success', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We\'ll walk you through it in our introduction meeting.' },
  ];

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
<div className='KeayFeatureSection'> 

    <p className=' text-5xl pl-6 py-36 lg:w-1/2'>After helping hundreds of brands, there are a few key things we've learned are needed to do the best work</p>

    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
      {keyFeatures.map((feature, index) => (
        <div ref={el => divs.current[index] = el} key={feature.id} className="grow h-80">
          <div className="md:cutout lg:cutout lg:border-none md:border-none">
            <div className="flex flex-col items-stretch sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 h-60">
              <div className="grow flex items-stretch">
                <div className="self-start pl-6">
                    <div className='absolute'> 
                    {`0${feature.id}`}
                    </div>
                    </div>
                <div className="self-end text-left  text-xl">{feature.title}</div>
              </div>
              <div className="self-end">{feature.content}</div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </div>
    </>
  );
}

export default KeyFeature;
