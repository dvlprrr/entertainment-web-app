import { Movie } from "../../../types/Movie"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getTrendingMovies = (): Promise<{
  data: Omit<Movie[], "genres">
}> => axiosInstance.get("trending-movies")
