import { useQuery } from "react-query"
import { getAllMovies } from "./service"

export function useGetAllMovies(searchValue: string) {
  const { data, error, refetch } = useQuery(
    ["all-movies"],
    async () => getAllMovies(searchValue),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data, refetch }
}
