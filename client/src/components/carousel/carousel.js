import React from 'react';
import './carousel.scss';

//router
import { Link } from 'react-router-dom';
//slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ women, men }) => {
  const content = [
    women.items[3],
    men.items[4],
    women.items[4],
    men.items[5],
    men.items[9],
    women.items[8],
    men.items[18],
    women.items[9],
    men.items[20],
    women.items[10],
    men.items[12],
    women.items[11],
    men.items[13],
    women.items[13],
    men.items[14],
    women.items[14],
    men.items[15],
    women.items[1],
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='carousel container-fluid'>
      <Slider {...settings}>
        {content.map((item) => (
          <Link
            to={`${item.name.split(' ').join('-').toLowerCase()}`}
            state={item}
            key={item.name}
          >
            <div className='image-wrapper'>
              <img src={item.image} alt='carousel' />
            </div>
            <div className='content-over'>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
