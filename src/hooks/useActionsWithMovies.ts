import type { SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { useGetGenres } from "../components/Settings/hooks/useGetGenres"

export const useActionsWithMovies = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [movieType, setMovieType] = useState("")
  const [age, setAge] = useState("")
  const { data: genres } = useGetGenres()

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

  return {
    selectedGenres,
    age,
    movieType,
    handleSelectedGenres,
    handleMovieTypeChange,
    handleAgeChange,
    selectGenresIds,
  }
}
