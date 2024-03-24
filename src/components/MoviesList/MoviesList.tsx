import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../MovieCard/MovieCard"
import { useGetMovies } from "./hooks/useGetMovies"
import { MoviesListWrapper, MoviesTitle, MoviesWrapper } from "./styled"

export function MoviesList() {
  const [params] = useSearchParams()
  const searchValue = params.get("search")
  const { data: movies, refetch } = useGetMovies(searchValue || "")
  useEffect(() => {
    refetch()
  }, [searchValue, refetch])
  return (
    <MoviesWrapper>
      <MoviesTitle>
        {searchValue
          ? `Found ${movies?.length} results for ‘${searchValue}’`
          : "Movies"}
      </MoviesTitle>
      <MoviesListWrapper>
        {movies?.map((movie) => <MovieCard {...movie} />)}
      </MoviesListWrapper>
    </MoviesWrapper>
  )
}
