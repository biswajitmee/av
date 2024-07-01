// src/components/CardCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarouselStyle.css';

const CardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    variableWidth: false, // Disable variableWidth to maintain consistent width for large screens
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: false, // Disable variableWidth for mobile for consistent width
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: false, // Disable variableWidth for mobile for consistent width
        },
      },
    ],
  };

  const colors = ['#FFC0CB', '#ADD8E6', '#98FB98', '#FFA07A', '#FFFFE0', '#FFC0CB', '#ADD8E6', '#98FB98'];

  const cards = [
    { id: 0, content: 'Card 1', name: 'Kate A', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[0] },
    { id: 1, content: 'Card 2', name: 'Kate B', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[1] },
    { id: 2, content: 'Card 3', name: 'Kate C', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[2] },
    { id: 3, content: 'Card 4', name: 'Kate D', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[3] },
    { id: 4, content: 'Card 5', name: 'Kate E', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[4] },
    { id: 5, content: 'Card 6', name: 'Kate C', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[5] },
    { id: 6, content: 'Card 7', name: 'Kate D', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[6] },
    { id: 7, content: 'Card 8', name: 'Kate E', imgSrc: 'https://via.placeholder.com/150', width: '500px', height: '470px', bg: colors[7] },
  ];

  return (
    <div className="container mx-auto px-10">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4 pt-20" style={{ width: '100%' }}> 
            <div className="CardDeesign p-12" style={{ width: '100%', maxWidth: '500px', height: card.height, backgroundColor: card.bg }}>
              <div className='cardPhoto'>
                <div className='photoCover'>{card.name}</div>
              </div>
              <div className='cardContent'> </div>
              <div className='cardName'> </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
