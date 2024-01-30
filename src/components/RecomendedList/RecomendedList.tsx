import { RecomendedCard } from "../RecomendedCard/RecomendedCard";
import {
  RecomendedListWrapper,
  RecomendedTitle,
  RecomendedWrapper,
} from "./styled";

export function RecomendedList() {
  return (
    <RecomendedWrapper>
      <RecomendedTitle>Recommended for you</RecomendedTitle>
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
