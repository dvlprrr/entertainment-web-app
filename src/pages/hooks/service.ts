import axios from "axios"
import { BASE_URL } from "../../features/config"
import { Favourites } from "../../types/Favourites"

const jwt = localStorage.getItem("jwt")

export const getFavouriteMoviesForCurrentUser = (): Promise<{
  data: {
    favourites_movies: Favourites
  }
}> =>
  axios.get(`${BASE_URL}/favourite-movie?search`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
