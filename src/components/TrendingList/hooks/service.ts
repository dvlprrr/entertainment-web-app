import { Film } from "../../../types/Film"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getTrendingMovies = (): Promise<{
  data: Omit<Film[], "genres">
}> => axiosInstance.get("trending-movies")
