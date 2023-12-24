import "swiper/css";
import "swiper/css/free-mode";
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
        freeMode={true}
        speed={3000}
        className={style.swiperTrending}
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
