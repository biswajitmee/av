import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ card, selected }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        height: selected ? (window.innerWidth <= 768 ? '52rem' : 'h-screen') : (window.innerWidth <= 768 ? '4rem' : 'h-screen'),
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  }, [selected]);

  return (
    <div className='relative'>
      <div
        ref={cardRef}
        className={`md:h-screen rounded-xl ${selected ? 'h-52 md:h-screen' : 'h-12 md:h-screen'} ${card.bgCardColor}`}
      >
        <span className={`ml-4 pt-5 absolute ${card.textColor}`}>{card.cardNo}</span>
        <div className={`${card.textColor}`}>
          <h2 className='absolute custom-mt md:rotate-90'>{card.cardTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
