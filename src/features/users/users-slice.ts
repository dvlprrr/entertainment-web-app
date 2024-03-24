/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { Extra } from "../../types/Extra"
import { Status } from "../../types/Status"
import { User } from "../../types/User"
import { axiosInstance } from "../../utils/axiosinstance"

type AuthUserType = {
  email: string
  password: string
}

type AuthInitialState = {
  user: User | null
  status: Status
  error: string | null
}

const initialState: AuthInitialState = {
  user: null,
  status: "idle",
  error: null,
}

export const registerUser = createAsyncThunk<
  { token: string },
  AuthUserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/register",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.post(api.REGISTER_USER, data)
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const loginUser = createAsyncThunk<
  User,
  AuthUserType,
  { extra: Extra; rejectWithValue: string }
>("@@auth/login", async (data, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.post(api.LOGIN_USER, data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const { token } = res.data

    localStorage.setItem("jwt", token)

    return res.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const checkAuth = createAsyncThunk<
  User,
  string,
  { extra: Extra; rejectWithValue: string }
>("@@user/isAuth", async (jwt, { extra: { client, api }, rejectWithValue }) => {
  try {
    const { data } = await client.get(api.CHECK_JWT, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const toggleFavourite = createAsyncThunk<
  number,
  { movieId: number },
  { extra: Extra; rejectWithValue: string }
>("@@user/favourite", async (movieId, { extra: { api }, rejectWithValue }) => {
  try {
    const res = await axiosInstance.post(api.TOGGLE_FAVOURITE_MOVIES, movieId)
    return res.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const UserSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null
      localStorage.removeItem("jwt")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "rejected"
        state.error = "cannot load data"
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "received"
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload
        state.status = "received"
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload
      })
      .addCase(toggleFavourite.fulfilled, (state, { payload }) => {
        if (payload && state.user) {
          const userExistSelectedFilm =
            state.user.favourite_movies.includes(payload)

          if (userExistSelectedFilm) {
            state.user.favourite_movies = state.user.favourite_movies.filter(
              (movieId) => movieId !== payload,
            )
          } else {
            state.user.favourite_movies.push(payload)
          }
        }
      })
  },
})
export const { logOut } = UserSlice.actions

export const userReducer = UserSlice.reducer
