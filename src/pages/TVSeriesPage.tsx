import { RecommendedList } from "../components/RecomendedList/RecomendedList";
import { TVSeriesPageWrapper } from "./styled";

export function TvSeriesPage() {
  return (
    <TVSeriesPageWrapper>
      <RecommendedList recommendedTitle="TV Series" />
    </TVSeriesPageWrapper>
  );
}
