import { RecomendedList } from "../components/RecomendedList/RecomendedList";
import { TrendingList } from "../components/TrendingList/TrendingList";
import { HomePageWrapper } from "./styled";

export function HomePage() {
  return (
    <HomePageWrapper>
      <TrendingList />
      <RecomendedList />
    </HomePageWrapper>
  );
}
