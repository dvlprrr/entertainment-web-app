import { Movie } from "../../../types/Movie"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getTvSeries = (searchValue: string): Promise<{ data: Movie[] }> =>
  axiosInstance.get(`/movies/tv-series?search=${searchValue}`)
