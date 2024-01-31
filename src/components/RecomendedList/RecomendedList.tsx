import { Recommended } from "../../types/Recommended";
import { RecomendedCard } from "../RecomendedCard/RecomendedCard";
import {
  RecomendedListWrapper,
  RecomendedTitle,
  RecomendedWrapper,
} from "./styled";

interface RecomendedListT {
  recommendedTitle: string;
  arrayTrending: Recommended[];
}

export function RecommendedList({
  recommendedTitle,
  arrayTrending,
}: RecomendedListT) {
  const numberOfCards = 8;

  const duplicatedData = Array.from({ length: numberOfCards }, (_, index) => {
    const dataIndex = index % (arrayTrending?.length || 0);
    return arrayTrending?.[dataIndex];
  });

  const cards = duplicatedData.map((item, index) => (
    <RecomendedCard
      key={index}
      title={item?.title}
      url={item?.url}
      year={item?.year}
      category={item?.category}
      rating={item?.rating}
      isBookmarked={item?.isBookmarked}
      isTrending={item?.isTrending}
    />
  ));
  return (
    <RecomendedWrapper>
      <RecomendedTitle>{recommendedTitle}</RecomendedTitle>
      <RecomendedListWrapper>{cards}</RecomendedListWrapper>
    </RecomendedWrapper>
  );
}
