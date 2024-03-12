import { HomeMoviesList } from "../components/HomeMoviesList/HomeMoviesList"
import { TrendingList } from "../components/TrendingList/TrendingList"
import { HomePageWrapper } from "./styled"

export function HomePage() {
  return (
    <HomePageWrapper>
      <TrendingList />
      <HomeMoviesList />
    </HomePageWrapper>
  )
}
