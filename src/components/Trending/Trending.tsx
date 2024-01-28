import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "../TrendingCard/TrendingCard";
import style from "./Trending.module.css";
import { TrendingTitle, WrapperTrending } from "./styled";
export default function Trending() {
  return (
    <WrapperTrending>
      <TrendingTitle>Trending</TrendingTitle>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        freeMode
        speed={3000}
        className={style.swiperTrending}
        modules={[FreeMode]}
      >
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard />
        </SwiperSlide>
      </Swiper>
    </WrapperTrending>
  );
}
