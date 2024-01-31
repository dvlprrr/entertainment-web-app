import { RecommendedList } from "../components/RecomendedList/RecomendedList";
import { TrendingList } from "../components/TrendingList/TrendingList";
import { HomePageWrapper } from "./styled";

export function HomePage() {
  return (
    <HomePageWrapper>
      <TrendingList />
      <RecommendedList recommendedTitle={"Recommended for you"} />
    </HomePageWrapper>
  );
}
