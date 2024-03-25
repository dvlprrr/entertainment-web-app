import { Favourites } from "../../../types/Favourites"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getFavouriteMoviesForCurrentUser = (
  searchValue: string,
): Promise<{
  data: {
    favourites_movies: Favourites
  }
}> => axiosInstance.get(`/favourite-movie?search=${searchValue}`)
