import { Favourites } from "../../types/Favourites"
import { Movie } from "../../types/Movie"
import { axiosInstance } from "../../utils/axiosinstance"

export const getFavouriteMoviesForCurrentUser = (
  searchValue: string,
): Promise<{
  data: {
    favourites_movies: Favourites
  }
}> => axiosInstance.get(`/favourite-movie?search=${searchValue}`)

export const getAllMovies = (searchValue: string): Promise<{ data: Movie[] }> =>
  axiosInstance.get(`/movies?search=${searchValue}`)
