"use client"
import React from 'react';
import WhatWeRow from './whatWeDoRow';

function WhatWeDo() {
  const rowsData = [
    {
      rowClass: 'imgReveal1',
      videoSrc: 'comp1.mp4',
      title: 'Get a clear understanding of your brand’s needs',
      description: 'We will conduct a brand assessment to ensure we are a good fit and can collaborate and grow together.'
    },
    {
      rowClass: 'imgReveal2',
      videoSrc: 'comp2.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },
    {
      rowClass: 'imgReveal3',
      videoSrc: 'comp3.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },
    {
      rowClass: 'imgReveal4',
      videoSrc: 'comp4.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },
    {
      rowClass: 'imgReveal5',
      videoSrc: 'comp5.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },

  ];

  return (
    <>
      <p className="flex justify-center items-center text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl h-60 sm:h-96 md:h-96">
        Odds are you’ve worn a<br /> product we’ve made
      </p>
      <p className='pl-10 pb-10 text-4xl text-black	whtdo'>What we do</p>
      {rowsData.map((row, index) => (
        <WhatWeRow
          key={index}
          rowClass={row.rowClass}
          videoSrc={row.videoSrc}
          title={row.title}
          description={row.description}
        />
      ))}
    </>
  );
}

export default WhatWeDo;
