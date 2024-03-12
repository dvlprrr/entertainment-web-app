import { Movie } from "../../../types/Movie"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getMovies = (): Promise<{ data: Movie[] }> =>
  axiosInstance.get("/movies/movies")
