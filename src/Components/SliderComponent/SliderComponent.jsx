import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function SliderComponent({ children }) {
  return (
    <div className="container">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}   // 👈 أهم سطر
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          420: { slidesPerView: 2 },
          0: { slidesPerView: 2 },
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[  Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
}