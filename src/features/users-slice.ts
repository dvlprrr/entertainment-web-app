import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { Extra } from "../types/Extra"
import { Status } from "../types/Status"
import { User } from "../types/User"

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

export const UserSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {},
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
  },
})

export const userReducer = UserSlice.reducer
