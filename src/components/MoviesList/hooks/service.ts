import { Film } from "../../../types/Film"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getMovies = (searchValue: string): Promise<{ data: Film[] }> =>
  axiosInstance.get(`/movies/movies?search=${searchValue}`)
