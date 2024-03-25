import { useQuery } from "react-query"
import { getTrendingMovies } from "./service"

export function useGetTrendingMovies() {
  const { data, error } = useQuery(
    ["trending-movie"],
    async () => getTrendingMovies(),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке трендовых фильмов:", error)
  }

  return { data: data?.data }
}
