import { MovieCard } from "../MovieCard/MovieCard"
import { useGetMovies } from "./hooks/useGetMovies"
import { MoviesListWrapper, MoviesTitle, MoviesWrapper } from "./styled"

export function MoviesList() {
  const { data: movies } = useGetMovies()
  return (
    <MoviesWrapper>
      <MoviesTitle>Movies</MoviesTitle>
      <MoviesListWrapper>
        {movies?.map((movie) => <MovieCard {...movie} />)}
      </MoviesListWrapper>
    </MoviesWrapper>
  )
}
