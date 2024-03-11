import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Extra } from "../../types/Extra"
import { Genres } from "../../types/Genres"
import { Status } from "../../types/Status"

type GenresInitialState = {
  genres: Genres[] | null
  status: Status
  error: string | null
}

const initialState: GenresInitialState = {
  genres: null,
  status: "idle",
  error: null,
}

export const getGenres = createAsyncThunk<
  Genres[],
  undefined,
  { extra: Extra; rejectWithValue: string }
>("@@genres/all", async (_, { extra: { client, api }, rejectWithValue }) => {
  try {
    const { data } = await client.get(api.FETCH_GENRES)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const GenresSlice = createSlice({
  name: "@@genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(getGenres.rejected, (state) => {
        state.status = "rejected"
        state.error = "cannot load data"
      })
      .addCase(getGenres.fulfilled, (state, { payload }) => {
        state.status = "received"
        state.genres = payload
      })
  },
})

export const genresReducer = GenresSlice.reducer
