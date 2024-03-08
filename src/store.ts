import { configureStore } from "@reduxjs/toolkit"
import axios from "axios"
import * as api from "./features/config"
import { userReducer } from "./features/users-slice"

export const store = configureStore({
  reducer: { user: userReducer },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
