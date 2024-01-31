import { RecommendedList } from "../components/RecommendedList/RecommendedList";
import movie from "../images/movieTest.png";
import { TVSeriesPageWrapper } from "./styled";

export function TVSeriesPage() {
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
    <TVSeriesPageWrapper>
      <RecommendedList arrayMovies={arrayMovies} recommendedTitle="TV Series" />
    </TVSeriesPageWrapper>
  );
}
