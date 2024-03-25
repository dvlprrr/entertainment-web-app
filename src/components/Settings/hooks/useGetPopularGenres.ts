import { useQuery } from "react-query"
import { getPopularGenres } from "./service"

export function useGetPopularGenres() {
  const { data, error } = useQuery(
    ["popular-genres"],
    async () => getPopularGenres(),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке самых популярных жанров:", error)
  }

  return { data: data?.data }
}
