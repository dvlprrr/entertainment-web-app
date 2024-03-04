import type { SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { createFilm } from "../components/Settings/hooks/service"
import { useGetGenres } from "../components/Settings/hooks/useGetGenres"
import { Movie } from "../types/Movie"

export const useActionsWithMovies = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [movieType, setMovieType] = useState("")
  const [age, setAge] = useState("")
  const { data: genres } = useGetGenres()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Movie>({
    mode: "onSubmit",
  })

  const handleSelectedGenres = (
    event: SelectChangeEvent<typeof selectedGenres>,
  ) => {
    const {
      target: { value },
    } = event
    setSelectedGenres(typeof value === "string" ? value.split(",") : value)
  }

  const handleMovieTypeChange = (event: SelectChangeEvent) => {
    setMovieType(event.target.value)
  }

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  const selectGenresIds = (): number[] => {
    const selectedGenresIds: number[] = selectedGenres.map(
      (selectedGenreName) => {
        const genre = genres?.find((item) => item.name === selectedGenreName)
        return genre ? genre.id : 0
      },
    )

    return selectedGenresIds.filter((id) => id !== 0)
  }

  const onSubmit: SubmitHandler<Movie> = (data) => {
    data.genre = selectGenresIds()
    data.typeId = Number(movieType)
    data.ageRating = age
    createFilm(data)
      .then(() => {
        reset()
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  return {
    selectedGenres,
    age,
    movieType,
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleSelectedGenres,
    handleMovieTypeChange,
    handleAgeChange,
    selectGenresIds,
  }
}