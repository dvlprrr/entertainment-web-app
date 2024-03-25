import { Movie } from "../../../types/Film"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getTvSeries = (searchValue: string): Promise<{ data: Movie[] }> =>
  axiosInstance.get(`/movies/tv-series?search=${searchValue}`)
