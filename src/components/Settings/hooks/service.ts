import { Film } from "../../../types/Film"
import { Genres } from "../../../types/Genres"
import { axiosInstance } from "../../../utils/axiosinstance"

export type MovieToSend = {
  title: string
  url: string
  year: number
  typeId: number
  ageRatingId: number
  genre: number[]
}

export type UpdatedUser = {
  email: string
  avatar: string
}

export const createFilm = (data: MovieToSend) =>
  axiosInstance.post("/movies", data)

export const getMostPopularFilm = (): Promise<{ data: Film }> =>
  axiosInstance.get("/favourite-movie/popular-movie")

export const getPopularGenres = (): Promise<{ data: Genres["name"][] }> =>
  axiosInstance.get("/genre-film/popular")

export const updateUser = (data: UpdatedUser) =>
  axiosInstance.patch("/user", data)
export const getTotalUsers = (): Promise<{ data: number }> =>
  axiosInstance.get("user/count")
