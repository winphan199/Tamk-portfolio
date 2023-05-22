// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';

function LatestProjectsSection() {
  return (
    <section>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="">Slide 1</SwiperSlide>
      </Swiper>
    </section>
  );
}

export default LatestProjectsSection;
