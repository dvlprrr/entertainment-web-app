/* eslint-disable quotes */
import {
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material"
import { selectAgeRatings } from "../../../features/age_ratings/age_ratings-selector"
import { selectFilmTypes } from "../../../features/film_types/film_types-selector"
import { selectGenres } from "../../../features/genres/genres-selectors"
import { useAppSelector } from "../../../redux-hooks"
import { CustomFormControl } from "../../CustomFormControl/CustomFormControl"
import { useActionsWithMovies } from "../hooks/useActionsWithMovies"
import {
  AddMovieForm,
  AddMovieInfo,
  AddMovieInput,
  AddMovieLabel,
  AddMovieTrendingWrapper,
  AddMovieWrapper,
  ErrorMessage,
  SubmitButton,
} from "../styled"

const date = new Date()

export function AddMovie() {
  const {
    age,
    movieType,
    selectedGenres,
    errors,
    handleSelectedGenres,
    handleMovieTypeChange,
    handleAgeChange,
    register,
    handleSubmit,
    onSubmit,
  } = useActionsWithMovies()
  const filmTypes = useAppSelector(selectFilmTypes)
  const genres = useAppSelector(selectGenres)
  const ageRatings = useAppSelector(selectAgeRatings)

  return (
    <AddMovieWrapper>
      <AddMovieTrendingWrapper>sa</AddMovieTrendingWrapper>
      <AddMovieForm onSubmit={handleSubmit(onSubmit)}>
        Add new movie
        <AddMovieLabel>
          Title
          <AddMovieInput
            {...register("title", {
              required: {
                value: true,
                message: "This field cannot be empty",
              },
            })}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </AddMovieLabel>
        <AddMovieLabel>
          Url
          <AddMovieInput
            {...register("url", {
              required: {
                value: true,
                message: "This field cannot be empty",
              },
              pattern: {
                value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi,
                message: "This is incorrect link",
              },
            })}
          />
          {errors.url && <ErrorMessage>{errors.url.message}</ErrorMessage>}
        </AddMovieLabel>
        <AddMovieInfo>
          <AddMovieLabel>
            Year
            <AddMovieInput
              {...register("year", {
                required: {
                  value: true,
                  message: "This field cannot be empty",
                },
                min: {
                  value: 1895,
                  message: "The first film was released in 1895",
                },
                max: {
                  value: date.getFullYear(),
                  message: `It is now ${date.getFullYear()}`,
                },
                setValueAs: (value) => parseInt(value, 10),
              })}
              type="number"
            />
            {errors.year && <ErrorMessage>{errors.year.message}</ErrorMessage>}
          </AddMovieLabel>
          <CustomFormControl>
            <InputLabel id="age-label">Age</InputLabel>
            <Select
              labelId="age-label"
              value={age}
              label="Age"
              onChange={handleAgeChange}
            >
              {ageRatings?.map((ageRating) => (
                <MenuItem key={ageRating.id} value={ageRating.id}>
                  {ageRating.name}
                </MenuItem>
              ))}
            </Select>
          </CustomFormControl>
          <CustomFormControl>
            <InputLabel id="movie-type-label">Cinema</InputLabel>
            <Select
              labelId="movie-type-label"
              value={movieType}
              label="Cinema"
              onChange={handleMovieTypeChange}
            >
              {filmTypes?.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.type}
                </MenuItem>
              ))}
            </Select>
          </CustomFormControl>
          <CustomFormControl>
            <InputLabel id="genre-label">Genres</InputLabel>
            <Select
              labelId="genre-label"
              multiple
              value={selectedGenres}
              onChange={handleSelectedGenres}
              input={<OutlinedInput label="Genres" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {genres?.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  <Checkbox checked={selectedGenres.indexOf(item.name) > -1} />
                  <ListItemText primary={item.name} />
                </MenuItem>
              ))}
            </Select>
          </CustomFormControl>
        </AddMovieInfo>
        <SubmitButton type="submit">Add</SubmitButton>
      </AddMovieForm>
    </AddMovieWrapper>
  )
}
