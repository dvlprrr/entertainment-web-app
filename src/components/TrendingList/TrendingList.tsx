import { useMediaQuery } from "react-responsive"
import "swiper/css"
import "swiper/css/free-mode"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { TrendingCard } from "../TrendingCard/TrendingCard"
import style from "./TrendingList.module.css"
import { useGetTrendingMovies } from "./hooks/useGetTrendingMovies"
import { TrendingTitle, WrapperTrending } from "./styled"

export function TrendingList() {
  const isMatches426 = useMediaQuery({ query: "(max-width: 426px)" })
  const swiperSpaceBetween = isMatches426 ? 15 : 40
  const { data: movies } = useGetTrendingMovies()
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
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id} className={style.swiperSlide}>
              <TrendingCard {...movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </WrapperTrending>
  )
}
