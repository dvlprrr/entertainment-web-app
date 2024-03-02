import { useQuery } from "react-query"
import { getGenres } from "./service"

export function useGetGenres() {
  const { data, error } = useQuery(["genres"], async () => getGenres(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
    return { data: null, error }
  }

  return { data: data?.data }
}
