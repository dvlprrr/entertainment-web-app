import { Recommended } from "../../types/Recommended"
import { RecommendedCard } from "../RecommendedCard/RecommendedCard"
import {
  RecomendedListWrapper,
  RecomendedTitle,
  RecomendedWrapper,
} from "./styled"

interface RecomendedListT {
  recommendedTitle: string
  arrayMovies: Recommended[]
}

export function RecommendedList({
  recommendedTitle,
  arrayMovies,
}: RecomendedListT) {
  const numberOfCards = 8

  const duplicatedData = Array.from({ length: numberOfCards }, (_, index) => {
    const dataIndex = index % (arrayMovies?.length || 0)
    return arrayMovies?.[dataIndex]
  })

  const cards = duplicatedData.map((item, index) => (
    <RecommendedCard
      key={index}
      title={item?.title}
      url={item?.url}
      year={item?.year}
      category={item?.category}
      rating={item?.rating}
      isBookmarked={item?.isBookmarked}
      isTrending={item?.isTrending}
    />
  ))
  return (
    <RecomendedWrapper>
      <RecomendedTitle>{recommendedTitle}</RecomendedTitle>
      <RecomendedListWrapper>{cards}</RecomendedListWrapper>
    </RecomendedWrapper>
  )
}
