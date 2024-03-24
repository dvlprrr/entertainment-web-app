import { useQuery } from "react-query"
import { getFavouriteMoviesForCurrentUser } from "./service"

export function useGetFavouriteMoviesForCurrentUser(searchValue: string) {
  const { data, error, refetch } = useQuery(
    ["favourite"],
    async () => getFavouriteMoviesForCurrentUser(searchValue),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { favourites: data?.data.favourites_movies, refetch }
}
