"use client";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MainSlide from "./MainSlide";
import { AiOutlineArrowRight } from "react-icons/ai";

interface MainSliderInt {
  mainData: any;
}

const MainSlider = ({ mainData }: MainSliderInt) => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const { first_slide, second_slide, third_slide } = mainData;

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
    >
      <SwiperSlide>
        <MainSlide
          src={first_slide.slide_image.url}
          alt={first_slide.slide_image.alt}
          title={first_slide.slide_title}
          description={first_slide.slide_description}
          link={first_slide.link}
          icon={<AiOutlineArrowRight />}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSlide
          src={second_slide.slide_image.url}
          alt={second_slide.slide_image.alt}
          title={second_slide.slide_title}
          description={second_slide.slide_description}
          link={second_slide.link}
          icon={<AiOutlineArrowRight />}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSlide
          src={third_slide.slide_image.url}
          alt={third_slide.slide_image.alt}
          title={third_slide.slide_title}
          description={third_slide.slide_description}
          link={third_slide.link}
          icon={<AiOutlineArrowRight />}
        />
      </SwiperSlide>

      <div slot="container-end" className="swiper-pagination"></div>
    </Swiper>
  );
};

export default MainSlider;
