import favouriteMovie from "../../images/favouriteMovie.svg";
import { TrendingBackgroundContainer, TrendingCardWrapper } from "./styled";
export default function TrendingCard() {
  return (
    <TrendingCardWrapper>
      <TrendingBackgroundContainer>
        <img src={favouriteMovie} alt="fav" />
      </TrendingBackgroundContainer>
    </TrendingCardWrapper>
  );
}
