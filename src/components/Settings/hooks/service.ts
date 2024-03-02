import axios from "axios"
import { BASE_URL } from "../../../config"
import { FilmTypes } from "../../../types/FilmTypes"
import { Genres } from "../../../types/Genres"
import type { Movie } from "../../../types/Movie"

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
