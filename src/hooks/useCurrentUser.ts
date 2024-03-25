import { selectCurrentUser } from "../features/users/users-selectors"
import { useAppSelector } from "../redux-hooks"

export const useCurrentUser = () => useAppSelector(selectCurrentUser)
