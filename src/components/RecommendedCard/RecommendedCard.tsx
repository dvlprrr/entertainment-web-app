import { useMediaQuery } from "react-responsive"
import playIcon from "../../images/playIcon.svg"
import { Recommended } from "../../types/Recommended"
import { FavouriteMovieIcon } from "../FavouriteMovieIcon/FavouriteMovieIcon"
import {
  RecomendedCardInfoDetails,
  RecomendedCardInfoDot,
  RecomendedCardInfoText,
  RecomendedCardMovieIcon,
  RecomendedCardMovieTitle,
  RecomendedCardMovieWrapper,
  RecomendedPlay,
  RecomendedPlayIcon,
  RecomendedPlayText,
} from "./styled"

type RecomendedCardProps = Omit<Recommended, "id">

export function RecommendedCard({
  title,
  url,
  year,
  category,
  rating,
  isBookmarked,
}: RecomendedCardProps) {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })
  return (
    <div>
      <RecomendedCardMovieWrapper url={url}>
        <FavouriteMovieIcon isBookmarked={isBookmarked} />
        {!isWidth768 && (
          <RecomendedPlay>
            <RecomendedPlayIcon src={playIcon} alt="play" />
            <RecomendedPlayText>Play</RecomendedPlayText>
          </RecomendedPlay>
        )}
      </RecomendedCardMovieWrapper>
      <div>
        <RecomendedCardInfoDetails>
          <RecomendedCardInfoText>{year}</RecomendedCardInfoText>
          <RecomendedCardInfoDot />
          <RecomendedCardMovieIcon />
          <RecomendedCardInfoText>{category}</RecomendedCardInfoText>
          <RecomendedCardInfoDot />
          <RecomendedCardInfoText>{rating}</RecomendedCardInfoText>
        </RecomendedCardInfoDetails>
        <RecomendedCardMovieTitle>{title}</RecomendedCardMovieTitle>
      </div>
    </div>
  )
}
