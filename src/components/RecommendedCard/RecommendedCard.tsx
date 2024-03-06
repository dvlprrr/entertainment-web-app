import { useMediaQuery } from "react-responsive"
import playIcon from "../../images/playIcon.svg"
import { Movie } from "../../types/Movie"
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

export function RecommendedCard({ title, url, year, ageRating, genre }: Movie) {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <div>
      <RecomendedCardMovieWrapper url={url}>
        <FavouriteMovieIcon />
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
          <RecomendedCardInfoText>{ageRating}</RecomendedCardInfoText>
          <RecomendedCardInfoDot />
          <RecomendedCardInfoText>{genre}</RecomendedCardInfoText>
        </RecomendedCardInfoDetails>
        <RecomendedCardMovieTitle>{title}</RecomendedCardMovieTitle>
      </div>
    </div>
  )
}
