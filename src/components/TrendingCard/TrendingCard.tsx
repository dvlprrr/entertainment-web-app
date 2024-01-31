import playIcon from "../../images/playIcon.svg";
import {
  FavouriteMovie,
  TrendingBackgroundContainer,
  TrendingCardWrapper,
  TrendingInfoDetails,
  TrendingInfoDot,
  TrendingInfoText,
  TrendingInfoWrapper,
  TrendingMovieIcon,
  TrendingMovieTitle,
  TrendingPlay,
  TrendingPlayIcon,
  TrendingPlayText,
} from "./styled";
export function TrendingCard() {
  return (
    <TrendingCardWrapper>
      <TrendingBackgroundContainer>
        <FavouriteMovie />
      </TrendingBackgroundContainer>
      <TrendingPlay>
        <TrendingPlayIcon src={playIcon} alt="play" />
        <TrendingPlayText>Play</TrendingPlayText>
      </TrendingPlay>
      <TrendingInfoWrapper>
        <TrendingInfoDetails>
          <TrendingInfoText>2019</TrendingInfoText>
          <TrendingInfoDot></TrendingInfoDot>
          <TrendingMovieIcon />
          <TrendingInfoText>Movie</TrendingInfoText>
          <TrendingInfoDot></TrendingInfoDot>
          <TrendingInfoText>PG</TrendingInfoText>
        </TrendingInfoDetails>
        <TrendingMovieTitle>Beyond Earth</TrendingMovieTitle>
      </TrendingInfoWrapper>
    </TrendingCardWrapper>
  );
}
