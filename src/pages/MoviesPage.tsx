import { RecommendedList } from "../components/RecomendedList/RecomendedList";
import { MoviesPageWrapper } from "./styled";

export function MoviesPage() {
  return (
    <MoviesPageWrapper>
      <RecommendedList recommendedTitle="Movies" />
    </MoviesPageWrapper>
  );
}
