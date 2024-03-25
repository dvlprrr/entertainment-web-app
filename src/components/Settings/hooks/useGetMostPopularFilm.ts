import { useQuery } from "react-query"
import { getMostPopularFilm } from "./service"

export function useGetMostPopularFilm() {
  const { data, error } = useQuery(
    ["film-types"],
    async () => getMostPopularFilm(),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке самого популярного фильма:", error)
  }

  return { data: data?.data }
}
