import { useMediaQuery } from "react-responsive"
import "swiper/css"
import "swiper/css/free-mode"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { TrendingCard } from "../TrendingCard/TrendingCard"
import style from "./TrendingList.module.css"
import { TrendingTitle, WrapperTrending } from "./styled"

export function TrendingList() {
  const isWidth426 = useMediaQuery({ query: "(max-width: 426px)" })

  const swiperSpaceBetween = isWidth426 ? 15 : 40

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
        <SwiperSlide className={style.swiperSlide}>
          <TrendingCard
          // title={item?.title}
          // url={item?.url}
          // year={item?.year}
          // category={item?.category}
          // rating={item?.rating}
          // isBookmarked={item?.isBookmarked}
          // isTrending={item?.isTrending}
          />
        </SwiperSlide>
      </Swiper>
    </WrapperTrending>
  )
}
