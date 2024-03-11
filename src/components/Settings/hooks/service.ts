<<<<<<< Updated upstream
import axios from "axios"
import { BASE_URL } from "../../../config"
import { FilmTypes } from "../../../types/FilmTypes"
=======
>>>>>>> Stashed changes
import { Genres } from "../../../types/Genres"
import type { Movie } from "../../../types/Movie"

<<<<<<< Updated upstream
type getFilmTypesT = {
  data: FilmTypes[]
}

type getGenresT = {
  data: Genres[]
}
export const getFilmTypes = (): Promise<getFilmTypesT> =>
  axios.get(`${BASE_URL}/film-type`)

export const getGenres = (): Promise<getGenresT> =>
  axios.get(`${BASE_URL}/genre-film`)

export const createFilm = (data: Movie) =>
  axios.post(`${BASE_URL}/movies`, data)
=======
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

export const createFilm = (data: MovieToSend) =>
  axiosInstance.post("/movies", data)

export const getAgeRatings = (): Promise<getAgeRatingT> =>
  axiosInstance.get("/age-rating")

export const getMostPopularFilm = (): Promise<{ data: Movie }> =>
  axiosInstance.get("/favourite-movie/popular-movie")

export const getPopularGenres = (): Promise<{ data: Genres["name"][] }> =>
  axiosInstance.get("/genre-film/popular")
>>>>>>> Stashed changes
