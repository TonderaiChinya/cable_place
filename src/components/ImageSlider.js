import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {sliderData} from './SliderData'
import './Slider.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='imageSlider'>
      <Slider {...settings}>
        
        {sliderData.map((item) => (
          <div className='card'>
            <div className='card-top'>
              <img src={item.linking} alt={item.title} />
            </div>
            <div className='card-bottom'>
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      
      </Slider>
    </div>
  )
}

export default ImageSlider