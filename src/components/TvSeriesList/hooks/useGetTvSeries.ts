import { useQuery } from "react-query"
import { getTvSeries } from "./service"

export function useGetTvSeries(searchValue: string) {
  const { data, error, refetch } = useQuery(
    ["tv-series"],
    async () => getTvSeries(searchValue),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { data: data?.data, refetch }
}
