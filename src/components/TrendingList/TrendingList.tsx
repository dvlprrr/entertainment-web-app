import { useMediaQuery } from "react-responsive"
import "swiper/css"
import "swiper/css/free-mode"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { TrendingCard } from "../TrendingCard/TrendingCard"
import style from "./Swiper.module.css"
import { useGetTrendingMovies } from "./hooks/useGetTrendingMovies"
import { TrendingTitle, WrapperTrending } from "./styled"

const MOBILE_SPACE_BETWEEN = 15
const DESKTOP_SPACE_BETWEEN = 40

export function TrendingList() {
  const isMatches426 = useMediaQuery({ query: "(max-width: 426px)" })
  const swiperSpaceBetween = isMatches426
    ? MOBILE_SPACE_BETWEEN
    : DESKTOP_SPACE_BETWEEN
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
