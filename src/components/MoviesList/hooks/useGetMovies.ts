import { useQuery } from "react-query"
import { getMovies } from "./service"

export function useGetMovies(searchValue: string) {
  const { data, error, refetch } = useQuery(
    ["movies"],
    async () => getMovies(searchValue),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке фильмов:", error)
  }

  return { data: data?.data, refetch }
}
