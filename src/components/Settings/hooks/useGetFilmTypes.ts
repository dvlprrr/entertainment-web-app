import { useQuery } from "react-query"
import { getFilmTypes } from "./service"

export function useGetFilmTypes() {
  const { data, error } = useQuery(["film-types"], async () => getFilmTypes(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data }
}
