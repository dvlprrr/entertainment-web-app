import {
  FavouriteMovie,
  TrendingBackgroundContainer,
  TrendingCardWrapper,
  TrendingPlay,
  TrendingPlayIcon,
  TrendingPlayText,
} from "./styled";
export default function TrendingCard() {
  return (
    <TrendingCardWrapper>
      <TrendingBackgroundContainer>
        <FavouriteMovie />
      </TrendingBackgroundContainer>
      <TrendingPlay>
        <TrendingPlayIcon />
        <TrendingPlayText>Play</TrendingPlayText>
      </TrendingPlay>
    </TrendingCardWrapper>
  );
}
