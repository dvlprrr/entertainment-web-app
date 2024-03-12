import { useQuery } from "react-query"
import { getTvSeries } from "./service"

export function useGetTvSeries() {
  const { data, error } = useQuery(["tv-series"], async () => getTvSeries(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data }
}
