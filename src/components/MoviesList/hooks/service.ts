import { Movie } from "../../../types/Movie"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getMovies = (searchValue: string): Promise<{ data: Movie[] }> =>
  axiosInstance.get(`/movies/movies?search=${searchValue}`)
