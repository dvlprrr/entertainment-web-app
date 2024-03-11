import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AgeRating } from "../../types/AgeRating"
import { Extra } from "../../types/Extra"
import { Status } from "../../types/Status"

type ageRatingsInitialState = {
  ageRatings: AgeRating[] | null
  status: Status
  error: string | null
}

const initialState: ageRatingsInitialState = {
  ageRatings: null,
  status: "idle",
  error: null,
}

export const getAgeRatings = createAsyncThunk<
  AgeRating[],
  undefined,
  { extra: Extra; rejectWithValue: string }
>(
  "@@ageRatings/all",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.get(api.FETCH_AGE_RATINGS)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const AgeRaitngsSlice = createSlice({
  name: "@@ageRatings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgeRatings.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(getAgeRatings.rejected, (state) => {
        state.status = "rejected"
        state.error = "cannot load data"
      })
      .addCase(getAgeRatings.fulfilled, (state, { payload }) => {
        state.status = "received"
        state.ageRatings = payload
      })
  },
})

export const ageRatingsReducer = AgeRaitngsSlice.reducer
