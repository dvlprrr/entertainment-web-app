import { MoviesList } from "../components/MoviesList/MoviesList"
import { TrendingList } from "../components/TrendingList/TrendingList"
import { HomePageWrapper } from "./styled"

export function HomePage() {
  return (
    <HomePageWrapper>
      <TrendingList />
      <MoviesList />
    </HomePageWrapper>
  )
}
