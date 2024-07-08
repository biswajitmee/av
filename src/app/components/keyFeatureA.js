import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
 

const KeyFeatureA = () => {
  const divs = useRef([]);

  useEffect(() => {
    divs.current.forEach((div) => {
      div.addEventListener('mouseenter', () => {
        gsap.to(div, { flexGrow: 3, duration: 0.5 });
        gsap.to(div.querySelector('.contentFeature'), { display: 'block', opacity: 1, duration: 0.5 });
        gsap.to(divs.current.filter(d => d !== div), { flexGrow: 1, duration: 0.5 });
        // gsap.to(divs.current.filter(d => d !== div).map(d => d.querySelector('.contentFeature')), { display: 'none', opacity: 0, duration: 0.5 });
      });

      div.addEventListener('mouseleave', () => {
        gsap.to(divs.current, { flexGrow: 1, duration: 0.5 });
        // gsap.to(div.querySelector('.contentFeature'), { display: 'none', opacity: 0, duration: 0.5 });
      });
    });
  }, []);

  return (
    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row ">
      <div ref={el => divs.current[0] = el} className="flexDiv">
        <div className="flexC"> 
        <div className='cutout'> 

          <div className="flex-1">
            <div className='headingFeature'>Early Stage</div>
          </div>
          <div className="flex-1">
            <div className='contentFeature'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </div>

          </div>
     

        </div>
      </div>
      <div ref={el => divs.current[1] = el} className="flexDiv">
        <div className="flexC">
        <div className='cutout'> 
          <div className="flex-1">
            <div className='headingFeature'>Trust</div>
          </div>
          <div className="flex-1">
            <div className='contentFeature'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
          </div>
          </div>
        </div>
      </div>
      <div ref={el => divs.current[2] = el} className="flexDiv">
        <div className="flexC">
          <div className="flex-1">
            <div className='headingFeature'>Loyalty</div>
          </div>
          <div className="flex-1">
            <div className='contentFeature'>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          </div>
        </div>
      </div>
      <div ref={el => divs.current[3] = el} className="flexDiv">
        <div className="flexC">
          <div className="flex-1">
            <div className='headingFeature'>Quality</div>
          </div>
          <div className="flex-1">
            <div className='contentFeature'>We'll walk you through it in our introduction meeting.</div>
          </div>
        </div>
      </div>
      <div ref={el => divs.current[4] = el} className="flexDiv">
        <div className="flexC">
          <div className="flex-1">
            <div className='headingFeature'>Expenditure</div>
          </div>
          <div className="flex-1">
            <div className='contentFeature'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>
        </div>
      </div>
      <div ref={el => divs.current[5] = el} className="flexDiv">
        <div className="flexC">
          <div className="flex-1">
            <div className='headingFeature'>Success</div>
          </div>
          <div className="flex-1">
            <div className='contentFeature'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatureA;
