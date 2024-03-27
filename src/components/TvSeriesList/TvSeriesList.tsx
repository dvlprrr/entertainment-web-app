import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { FilmCard } from "../FilmCard/FilmCard"
import { useGetTvSeries } from "./hooks/useGetTvSeries"
import { TvSeriesListWrapper, TvSeriesTitle, TvSeriesWrapper } from "./styled"

export function TvSeriesList() {
  const [params] = useSearchParams()
  const searchValue = params.get("search")
  const { data: tvSeries, refetch } = useGetTvSeries(searchValue || "")
  useEffect(() => {
    refetch()
  }, [searchValue, refetch])

  return (
    <TvSeriesWrapper>
      <TvSeriesTitle>
        {searchValue
          ? `Found ${tvSeries?.length} results for ‘${searchValue}’`
          : "TV Series"}
      </TvSeriesTitle>
      <TvSeriesListWrapper>
        {tvSeries?.map((movie) => <FilmCard {...movie} />)}
      </TvSeriesListWrapper>
    </TvSeriesWrapper>
  )
}
