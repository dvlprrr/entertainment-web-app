import { useQuery } from "react-query"
import { getAllMovies } from "./service"

export function useGetAllMovies() {
  const { data, error } = useQuery(["all-movies"], async () => getAllMovies(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data }
}
