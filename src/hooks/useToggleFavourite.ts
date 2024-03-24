import { useQuery } from "react-query"
import { toggleFavourite } from "./service"

export function useToggleFavourites(id: number) {
  const { data, error, refetch } = useQuery(
    ["favourite"],
    async () => toggleFavourite(id),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
  }

  return { favourites: data?.data, refetch }
}
