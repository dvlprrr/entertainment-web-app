import axios from "axios"
import { BASE_URL } from "../../config"
import { Favourites } from "../../types/Favourites"
import { User } from "../../types/User"

const jwt = localStorage.getItem("jwt")
export const getCurrentUser = (): Promise<{ data: User }> =>
  axios.get(`${BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })

export const getFavouriteMoviesForCurrentUser = (): Promise<{
  data: {
    favourites_movies: Favourites
  }
}> =>
  axios.get(`${BASE_URL}/favourite-movie?search`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
