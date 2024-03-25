import { useQuery } from "react-query"
import { getTotalUsers } from "./service"

export function useGetTotalUsers() {
  const { data, error } = useQuery(
    ["total-users"],
    async () => getTotalUsers(),
    {
      retry: false,
    },
  )

  if (error) {
    console.error("Ошибка при загрузке колличества пользователей:", error)
  }

  return { data: data?.data }
}
