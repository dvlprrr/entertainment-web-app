import { useGetAllMovies } from "../../pages/hooks/useGetAllMovies"
import { MovieCard } from "../MovieCard/MovieCard"
import {
  HomeMoviesListWrapper,
  HomeMoviesTitle,
  HomeMoviesWrapper,
} from "./styled"

export function HomeMoviesList() {
  const { data: movies } = useGetAllMovies()
  return (
    <HomeMoviesWrapper>
      <HomeMoviesTitle>Recommended for you</HomeMoviesTitle>
      <HomeMoviesListWrapper>
        {movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </HomeMoviesListWrapper>
    </HomeMoviesWrapper>
  )
}
