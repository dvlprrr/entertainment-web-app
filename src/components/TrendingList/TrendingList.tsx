import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Recommended } from "../../types/Recommended";
import { TrendingCard } from "../TrendingCard/TrendingCard";
import style from "./TrendingList.module.css";
import { TrendingTitle, WrapperTrending } from "./styled";

interface TrendingListProps {
  arrayTrending: Recommended[];
}

export function TrendingList({ arrayTrending }: TrendingListProps) {
  const isWidth426 = useMediaQuery({ query: "(max-width: 426px)" });

  const swiperSpaceBetween = isWidth426 ? 15 : 40;

  const numberOfCards = 6;

  const duplicatedData = Array.from({ length: numberOfCards }, (_, index) => {
    const dataIndex = index % (arrayTrending?.length || 0);
    return arrayTrending?.[dataIndex];
  });

  const trendingCards = duplicatedData.map((item, index) => (
    <SwiperSlide key={index} className={style.swiperSlide}>
      <TrendingCard
        title={item?.title}
        url={item?.url}
        year={item?.year}
        category={item?.category}
        rating={item?.rating}
        isBookmarked={item?.isBookmarked}
        isTrending={item?.isTrending}
      />
    </SwiperSlide>
  ));

  return (
    <WrapperTrending>
      <TrendingTitle>Trending</TrendingTitle>
      <Swiper
        spaceBetween={swiperSpaceBetween}
        slidesPerView={3}
        freeMode
        speed={3000}
        className={style.swiperTrending}
        modules={[FreeMode]}
      >
        {trendingCards}
      </Swiper>
    </WrapperTrending>
  );
}
