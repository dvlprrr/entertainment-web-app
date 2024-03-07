import axios from "axios"
import { BASE_URL } from "../config"

const jwt = localStorage.getItem("jwt")
export const toggleFavourite = (movieId: number) =>
  axios.post(
    `${BASE_URL}/favourite-movie`,
    { movieId },
    {
      headers: { Authorization: `Bearer ${jwt}` },
    },
  )
