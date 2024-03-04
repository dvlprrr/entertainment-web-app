/* eslint-disable quotes */
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material"
import { useActionsWithMovies } from "../../../hooks/useActionsWithMovies"
import { useGetFilmTypes } from "../hooks/useGetFilmTypes"
import { useGetGenres } from "../hooks/useGetGenres"
import {
  AddMovieForm,
  AddMovieInfo,
  AddMovieInput,
  AddMovieLabel,
  AddMovieWrapper,
  ErrorMessage,
  SubmitButton,
  styleFormControll,
} from "../styled"

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
  const { data: filmTypes } = useGetFilmTypes()
  const { data: genres } = useGetGenres()

  const date = new Date()
  return (
    <AddMovieWrapper>
      <AddMovieForm onSubmit={handleSubmit(onSubmit)}>
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
          <FormControl sx={styleFormControll} fullWidth>
            <InputLabel id="age-label">Age</InputLabel>
            <Select
              labelId="age-label"
              value={age}
              label="Age"
              onChange={handleAgeChange}
            >
              <MenuItem value="G">G</MenuItem>
              <MenuItem value="PG">PG</MenuItem>
              <MenuItem value="PG-13">PG-13</MenuItem>
              <MenuItem value="R">R</MenuItem>
              <MenuItem value="R">NC-17</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={styleFormControll} fullWidth>
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
          </FormControl>
          <FormControl sx={styleFormControll}>
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
          </FormControl>
        </AddMovieInfo>
        <SubmitButton type="submit">Add</SubmitButton>
      </AddMovieForm>
    </AddMovieWrapper>
  )
}
