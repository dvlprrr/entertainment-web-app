import { RecommendedList } from "../components/RecommendedList/RecommendedList";
import movie from "../images/movieTest.png";
import { MoviesPageWrapper } from "./styled";

export function MoviesPage() {
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
  ];
  return (
    <MoviesPageWrapper>
      <RecommendedList arrayMovies={arrayMovies} recommendedTitle="Movies" />
    </MoviesPageWrapper>
  );
}
