import { useQuery } from "react-query"
import { getAgeRatings } from "./service"

export function useGetAgeRatings() {
  const { data, error } = useQuery(["popular"], async () => getAgeRatings(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data }
}
