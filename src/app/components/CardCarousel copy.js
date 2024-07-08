// src/components/CardCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarouselStyle.css'

 

const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        { id: 1, content: 'Card 1', name:'Kate A' },
        { id: 2, content: 'Card 2', name:'Kate B' },
        { id: 3, content: 'Card 3', name:'Kate C' },
        { id: 4, content: 'Card 4', name:'Kate D' },
        { id: 5, content: 'Card 5', name:'Kate E' },
    ];

    return (
        <div className="container mx-auto px-6">
            <Slider {...settings}>
                {cards.map((card) => (
                    <div key={card.id} className="p-4">
                    
                     <div className="CardDeesign">
                            
                          <div className='cardPhoto'>
                            <div className='photoCover'></div>
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
