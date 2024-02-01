import { RecommendedList } from "../components/RecommendedList/RecommendedList"
import movie from "../images/movieTest.png"
import { FavouritePageWrapper } from "./styled"

export function FavouritePage() {
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
    <FavouritePageWrapper>
      <RecommendedList
        arrayMovies={arrayMovies}
        recommendedTitle="Bookmarked Movies"
      />
      <RecommendedList
        arrayMovies={arrayMovies}
        recommendedTitle="Bookmarked TV Series"
      />
    </FavouritePageWrapper>
  )
}
