import { Favourites } from "../../types/Favourites"
import { axiosInstance } from "../../utils/axiosinstance"

export const getFavouriteMoviesForCurrentUser = (): Promise<{
  data: {
    favourites_movies: Favourites
  }
}> => axiosInstance.get("/favourite-movie?search")
