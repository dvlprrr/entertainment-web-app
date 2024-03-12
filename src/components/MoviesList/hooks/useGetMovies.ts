import { useQuery } from "react-query"
import { getMovies } from "./service"

export function useGetMovies() {
  const { data, error } = useQuery(["movies"], async () => getMovies(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data }
}
