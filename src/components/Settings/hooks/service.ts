import { Genres } from "../../../types/Genres"
import { Movie } from "../../../types/Movie"
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

export const getMostPopularFilm = (): Promise<{ data: Movie }> =>
  axiosInstance.get("/favourite-movie/popular-movie")

export const getPopularGenres = (): Promise<{ data: Genres["name"][] }> =>
  axiosInstance.get("/genre-film/popular")

export const updateUser = (data: UpdatedUser) =>
  axiosInstance.patch("/user", data)
