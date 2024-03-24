import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useGetAllMovies } from "../../pages/hooks/useGetAllMovies"
import { MovieCard } from "../MovieCard/MovieCard"
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
        {movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </HomeMoviesListWrapper>
    </HomeMoviesWrapper>
  )
}
