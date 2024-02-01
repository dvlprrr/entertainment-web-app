import { RecommendedList } from "../components/RecommendedList/RecommendedList"
import { TrendingList } from "../components/TrendingList/TrendingList"
import movie from "../images/movieTest.png"
import { HomePageWrapper } from "./styled"

export function HomePage() {
  const arrayMovies = [
    {
      id: 1,
      title: "Beyond Earth",
      url: movie,
      year: 2019,
      category: "Movie",
      rating: "PG",
      isBookmarked: true,
      isTrending: true,
    },
  ]
  return (
    <HomePageWrapper>
      <TrendingList arrayTrending={arrayMovies} />
      <RecommendedList
        recommendedTitle="Recommended for you"
        arrayMovies={arrayMovies}
      />
    </HomePageWrapper>
  )
}
