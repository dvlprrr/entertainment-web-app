import { useQuery } from "react-query"
import { getCurrentUser } from "./service"

export function useGetUser() {
  const { data, error } = useQuery(["user"], async () => getCurrentUser(), {
    retry: false,
  })

  if (error) {
    console.error("Ошибка при загрузке типов фильмов:", error)
    return { data: null, error }
  }

  return { user: data?.data }
}
