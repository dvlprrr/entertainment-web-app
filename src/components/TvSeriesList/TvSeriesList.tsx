import { MovieCard } from "../MovieCard/MovieCard"
import { useGetTvSeries } from "./hooks/useGetTvSeries"
import { TvSeriesListWrapper, TvSeriesTitle, TvSeriesWrapper } from "./styled"

export function TvSeriesList() {
  const { data: tvSeries } = useGetTvSeries()
  return (
    <TvSeriesWrapper>
      <TvSeriesTitle>TV Series</TvSeriesTitle>
      <TvSeriesListWrapper>
        {tvSeries?.map((movie) => <MovieCard {...movie} />)}
      </TvSeriesListWrapper>
    </TvSeriesWrapper>
  )
}
