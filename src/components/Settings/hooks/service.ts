import { FilmTypes } from "../../../types/FilmTypes"
import { Genres } from "../../../types/Genres"
import { Movie } from "../../../types/Movie"
import { axiosInstance } from "../../../utils/axiosinstance"

type getFilmTypesT = {
  data: FilmTypes[]
}

type getGenresT = {
  data: Genres[]
}

type getAgeRatingT = {
  data: {
    id: number
    name: string
  }[]
}
export type MovieToSend = {
  title: string
  url: string
  year: number
  typeId: number
  ageRatingId: number
  genre: number[]
}

export const getFilmTypes = (): Promise<getFilmTypesT> =>
  axiosInstance.get("/film-type")

export const getGenres = (): Promise<getGenresT> =>
  axiosInstance.get("/genre-film")

export const createFilm = (data: MovieToSend) =>
  axiosInstance.post("/movies", data)

export const getAgeRatings = (): Promise<getAgeRatingT> =>
  axiosInstance.get("/age-rating")

export const getMostPopularFilm = (): Promise<{ data: Movie }> =>
  axiosInstance.get("/favourite-movie/popular")
