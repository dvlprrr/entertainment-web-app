import { useSearchParams } from "react-router-dom"
import { HomeMoviesList } from "../components/HomeMoviesList/HomeMoviesList"
import { TrendingList } from "../components/TrendingList/TrendingList"
import { HomePageWrapper } from "./styled"

export function HomePage() {
  const [params] = useSearchParams()
  const searchValue = params.get("search")
  return (
    <HomePageWrapper>
      {!searchValue && <TrendingList />}
      <HomeMoviesList />
    </HomePageWrapper>
  )
}
