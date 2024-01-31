import { RecommendedList } from "../components/RecomendedList/RecomendedList";
import { FavouritePageWrapper } from "./styled";

export function FavouritePage() {
  return (
    <FavouritePageWrapper>
      <RecommendedList recommendedTitle={"Bookmarked Movies"} />
      <RecommendedList recommendedTitle={"Bookmarked TV Series"} />
    </FavouritePageWrapper>
  );
}
