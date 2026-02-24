import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Slider.module.css';

import banner1 from '../../assets/banner_Hero1.jpg';
import banner2 from '../../assets/banner_Hero2.jpg';
import banner3 from '../../assets/banner_Hero3.jpg';
import Button from '../Btn/Button';

const slides = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "Up to 70% Off",
    description: "Discover the hottest trends of the season",
    buttonText: "Shop Now",
    image: banner1,
    alt: "Summer Collection Banner",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh Styles Every Week",
    description: "Be the first to wear the latest fashion",
    buttonText: "Explore Now",
    image: banner2,
    alt: "New Arrivals Banner",
  },
  {
    id: 3,
    title: "Limited Offer",
    subtitle: "Free Shipping This Week",
    description: "On all orders above $50",
    buttonText: "Shop Now",
    image: banner3,
    alt: "Limited Offer Banner",
  },
];

export default function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className={`${styles.swiper} hero-swiper`}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <div className={styles.details}>
              <h4>{slide.description}</h4>
              <h2>{slide.subtitle}</h2>
              <h3>{slide.title}</h3>
             <Button>
                {slide.buttonText}
             </Button>
            </div>

            <div className={styles.imageContainer}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.img}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}