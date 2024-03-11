import { configureStore } from "@reduxjs/toolkit"
import axios from "axios"
<<<<<<< Updated upstream
import * as api from "./config"
import { userReducer } from "./features/users-slice"
=======
import { ageRatingsReducer } from "./features/age_ratings/age_ratings-slice"
import * as api from "./features/config"
import { filmTypesReducer } from "./features/film_types/film_types-slice"
import { genresReducer } from "./features/genres/genres-slice"
import { userReducer } from "./features/users/users-slice"
>>>>>>> Stashed changes

export const store = configureStore({
  reducer: {
    user: userReducer,
    genres: genresReducer,
    filmTypes: filmTypesReducer,
    ageRatings: ageRatingsReducer,
  },
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
