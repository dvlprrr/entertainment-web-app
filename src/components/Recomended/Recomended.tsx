import RecomendedCard from "./RecomendedCard";
import { RecomendedList, RecomendedTitle, RecomendedWrapper } from "./styled";

export default function Recomended() {
  return (
    <RecomendedWrapper>
      <RecomendedTitle>Recommended for you</RecomendedTitle>
      <RecomendedList>
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
        <RecomendedCard />
      </RecomendedList>
    </RecomendedWrapper>
  );
}
