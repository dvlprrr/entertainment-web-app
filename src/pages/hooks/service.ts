import { Favourites } from "../../types/Favourites"
import { Movie } from "../../types/Movie"
import { axiosInstance } from "../../utils/axiosinstance"

export const getFavouriteMoviesForCurrentUser = (): Promise<{
  data: {
    favourites_movies: Favourites
  }
}> => axiosInstance.get("/favourite-movie?search")

export const getAllMovies = (): Promise<{ data: Movie[] }> =>
  axiosInstance.get("/movies")
