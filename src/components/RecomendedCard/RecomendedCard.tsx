import { useMediaQuery } from "react-responsive";
import playIcon from "../../images/playIcon.svg";
import {
  FavouriteMovie,
  FavouriteMovieWrapper,
  RecomendedCardInfoDetails,
  RecomendedCardInfoDot,
  RecomendedCardInfoText,
  RecomendedCardMovieIcon,
  RecomendedCardMovieTitle,
  RecomendedCardMovieWrapper,
  RecomendedPlay,
  RecomendedPlayIcon,
  RecomendedPlayText,
} from "./styled";

export function RecomendedCard() {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      <RecomendedCardMovieWrapper>
        <FavouriteMovieWrapper>
          <FavouriteMovie />
        </FavouriteMovieWrapper>
        {!isWidth768 && (
          <RecomendedPlay>
            <RecomendedPlayIcon src={playIcon} alt="play" />
            <RecomendedPlayText>Play</RecomendedPlayText>
          </RecomendedPlay>
        )}
      </RecomendedCardMovieWrapper>
      <div>
        <RecomendedCardInfoDetails>
          <RecomendedCardInfoText>2019</RecomendedCardInfoText>
          <RecomendedCardInfoDot></RecomendedCardInfoDot>
          <RecomendedCardMovieIcon />
          <RecomendedCardInfoText>Movie</RecomendedCardInfoText>
          <RecomendedCardInfoDot></RecomendedCardInfoDot>
          <RecomendedCardInfoText>PG</RecomendedCardInfoText>
        </RecomendedCardInfoDetails>
        <RecomendedCardMovieTitle>Beyond Earth</RecomendedCardMovieTitle>
      </div>
    </div>
  );
}
