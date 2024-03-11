import { axiosInstance } from "../utils/axiosinstance"

export const toggleFavourite = (movieId: number) =>
  axiosInstance.post("/favourite-movie", { movieId })
