import { RecomendedCard } from "../RecomendedCard/RecomendedCard";
import {
  RecomendedListWrapper,
  RecomendedTitle,
  RecomendedWrapper,
} from "./styled";

interface RecomendedListT {
  recommendedTitle: string;
}

export function RecommendedList({ recommendedTitle }: RecomendedListT) {
  return (
    <RecomendedWrapper>
      <RecomendedTitle>{recommendedTitle}</RecomendedTitle>
      <RecomendedListWrapper>
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
      </RecomendedListWrapper>
    </RecomendedWrapper>
  );
}
