  // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./ProductsSlide.css"

  // import compnents
import Product from '../Product/Product';

export default function ProductsSlide(){
  return (
    <section className="productsSideContainer">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        breakpoints={{
          // When the window width is >= 640px
          400: {
            slidesPerView: 1, // 1 slide visible on small screens
            spaceBetween: 10, // Small space between slides
          },
          800:{
            slidesPerView: 2, // 2 slides visible on medium screens
            spaceBetween: 20, // Increased space between slides
          },
          1000:{
            slidesPerView: 3, // 2 slides visible on medium screens
            spaceBetween: 20, // Increased space between slides
          },
          // When the window width is >= 768px
          1200: {
            slidesPerView: 4, // 2 slides visible on medium screens
            spaceBetween: 20, // Increased space between slides
          },
          // When the window width is >= 1024px
          1480: {
            slidesPerView: 4, // 3 slides visible on larger screens
            spaceBetween: 30, // Larger space between slides
          },
        }}
      >
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
      </Swiper>
    </section>
  );
};