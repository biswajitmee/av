import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { gsap } from 'gsap';

const cards = [
  { cardNo: '01', cardTitle: 'DESIGN', bgCardColor: 'bg-red-500', bgColor: 'bg-red-500', textColor: 'text-black' },
  { cardNo: '02', cardTitle: 'TECHPAC', bgCardColor: 'bg-orange-700', bgColor: 'bg-orange-700', textColor: 'text-black' },
  { cardNo: '03', cardTitle: 'FABRIC', bgCardColor: 'bg-green-400', bgColor: 'bg-green-400', textColor: 'text-black' },
  { cardNo: '04', cardTitle: 'PROTOTYPE', bgCardColor: 'bg-gray-700', bgColor: 'bg-gray-700', textColor: 'text-black' },
  { cardNo: '05', cardTitle: 'PRODUCTION', bgCardColor: 'bg-blue-600', bgColor: 'bg-blue-600', textColor: 'text-black' },
];

const Slider = () => {
  const [selected, setSelected] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin();
    // Set initial width of cards statically after page reload
    cardRefs.current.forEach((cardRef, index) => {
      gsap.set(cardRef, {
        width: index === 0 ? '70%' : '5.5rem', // Adjusted to set only the first card initially to '70%'
      });
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  useEffect(() => {
    // Animate width change using GSAP when selected changes
    gsap.to(cardRefs.current[selected], {
      width: '70%',
      duration: 1,
      ease: 'power4.inOut',
    });

    // Reset other cards' widths
    cardRefs.current.forEach((cardRef, index) => {
      if (index !== selected) {
        gsap.to(cardRef, {
          width: '5.5rem',
          duration: 1,
          ease: 'power4.inOut',
        });
      }
    });
  }, [selected]);

  const handleClick = (key) => {
    setSelected(key);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNext = () => {
    setSelected((prevSelected) => (prevSelected === cards.length - 1 ? 0 : prevSelected + 1));
    setShowPopup(true);
  };

  const handlePrev = () => {
    setSelected((prevSelected) => (prevSelected === 0 ? cards.length - 1 : prevSelected - 1));
    setShowPopup(true);
  };

  return (
    <>
      <div className='h-full gurmukhi '>
        <div className='pt-[230px] pb-[120px] pl-[50px] text-[16px] md:text-[55px]  font-medium md:w-2/4 w-full'>Our 5 steps end-to-end process created with emerging brands in mind</div>
        <div className='hidden md:block'>
          <div className='h-screen flex items-center justify-center '>
            {cards.map((card, key) => (
              <div
                key={key}
                ref={el => cardRefs.current[key] = el}
                className={`${key === 0 ? 'w-70' : 'w-22'} cursor-pointer ml-custom relative`}
                onClick={() => handleClick(key)}
              >
                <Card card={card} selected={selected} />
              </div>
            ))}
            {showPopup && (
              <div className='absolute bg-black bg-opacity-50 flex items-center justify-center w-90'>
                <div className='bg-white p-6 rounded shadow-lg w-full'>
                  <button onClick={handleClosePopup} className='mb-4'>
                    Close
                  </button>
                  <p>Card {selected !== null ? cards[selected].cardNo : ''} details...</p>
                  <div className='flex mt-4'>
                    <button onClick={handlePrev} className='bg-gray-200 px-4 py-2 mr-2 rounded'>
                      Previous
                    </button>
                    <button onClick={handleNext} className='bg-gray-200 px-4 py-2 rounded'>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='block md:hidden relative h-screen'>
          <div className='flex flex-col  items-center justify-center'>
            {cards.map((card, key) => (
              <div
                key={key}
                className={`w-full cursor-pointer items-center justify-center relative`}
                onClick={() => handleClick(key)}
              >
                <Card card={card} selected={selected === key} />
              </div>
            ))}
            {showPopup && (
              <div className='absolute  bg-black bg-opacity-50 flex items-center justify-center'>
                <div className='bg-white p-6 rounded shadow-lg w-50'>
                  <button onClick={handleClosePopup} className='mb-4'>
                    Close
                  </button>
                  <p>Card {selected !== null ? cards[selected].cardNo : ''} details...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
