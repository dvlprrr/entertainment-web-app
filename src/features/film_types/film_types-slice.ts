import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Extra } from "../../types/Extra"
import { FilmTypes } from "../../types/FilmTypes"
import { Status } from "../../types/Status"

type FilmTypesInitialState = {
  filmTypes: FilmTypes[] | null
  status: Status
  error: string | null
}

const initialState: FilmTypesInitialState = {
  filmTypes: null,
  status: "idle",
  error: null,
}

export const getFilmTypes = createAsyncThunk<
  FilmTypes[],
  undefined,
  { extra: Extra; rejectWithValue: string }
>("@@filmTypes/all", async (_, { extra: { client, api }, rejectWithValue }) => {
  try {
    const { data } = await client.get(api.FETCH_FILM_TYPES)
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const FIlmTypesSlice = createSlice({
  name: "@@filmTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilmTypes.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(getFilmTypes.rejected, (state) => {
        state.status = "rejected"
        state.error = "cannot load data"
      })
      .addCase(getFilmTypes.fulfilled, (state, { payload }) => {
        state.status = "received"
        state.filmTypes = payload
      })
  },
})

export const filmTypesReducer = FIlmTypesSlice.reducer
