import { RootState } from "../../store"

export const selectAgeRatings = (state: RootState) =>
  state.ageRatings.ageRatings
