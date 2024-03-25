import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { FilmCard } from "../FilmCard/FilmCard"
import { useGetAllMovies } from "./hooks/useGetAllMovies"
import {
  HomeMoviesListWrapper,
  HomeMoviesTitle,
  HomeMoviesWrapper,
} from "./styled"

export function HomeMoviesList() {
  const [params] = useSearchParams()
  const searchValue = params.get("search")
  const { data: movies, refetch } = useGetAllMovies(searchValue || "")
  useEffect(() => {
    refetch()
  }, [params, refetch])
  return (
    <HomeMoviesWrapper>
      <HomeMoviesTitle searchValue={Boolean(searchValue)}>
        {searchValue
          ? `Found ${movies?.length} results for ‘${searchValue}’`
          : "Recommended for you"}
      </HomeMoviesTitle>
      <HomeMoviesListWrapper>
        {movies?.map((movie) => <FilmCard key={movie.id} {...movie} />)}
      </HomeMoviesListWrapper>
    </HomeMoviesWrapper>
  )
}
