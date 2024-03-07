import { useMediaQuery } from "react-responsive"
import { toggleFavourite } from "../../hooks/service"
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

export function MovieCard({
  title,
  url,
  year,
  ageRating,
  filmType,
  id,
}: Movie) {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })
  const onClick = () => {
    toggleFavourite(id)
  }
  return (
    <div>
      <RecomendedCardMovieWrapper url={url}>
        <FavouriteMovieIcon onClick={onClick} />
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
          <RecomendedCardInfoText>{filmType}</RecomendedCardInfoText>
          <RecomendedCardInfoDot />
          <RecomendedCardInfoText>{ageRating}</RecomendedCardInfoText>
        </RecomendedCardInfoDetails>
        <RecomendedCardMovieTitle>{title}</RecomendedCardMovieTitle>
      </div>
    </div>
  )
}
