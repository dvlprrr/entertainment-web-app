import { useQuery } from "react-query"
import { getFavouriteMoviesForCurrentUser } from "./service"

export function useGetFavouriteMoviesForCurrentUser() {
  const { data, error } = useQuery(
    ["favourite"],
    async () => getFavouriteMoviesForCurrentUser(),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
    return { data: null, error }
  }

  return { favourites: data?.data.favourites_movies }
}
