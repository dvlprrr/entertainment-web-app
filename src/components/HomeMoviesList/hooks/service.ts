import { Film } from "../../../types/Film"
import { axiosInstance } from "../../../utils/axiosinstance"

export const getAllMovies = (searchValue: string): Promise<{ data: Film[] }> =>
  axiosInstance.get(`/movies?search=${searchValue}`)
