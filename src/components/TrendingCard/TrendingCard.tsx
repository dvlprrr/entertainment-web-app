import playIcon from "../../images/playIcon.svg"
import { Recommended } from "../../types/Recommended"
import { FavouriteMovieIcon } from "../FavouriteMovieIcon/FavouriteMovieIcon"
import {
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
} from "./styled"

type RecomendedCardProps = Omit<Recommended, "id">

export function TrendingCard({
  title,
  url,
  year,
  category,
  rating,
  isBookmarked,
}: RecomendedCardProps) {
  return (
    <TrendingCardWrapper url={url}>
      <FavouriteMovieIcon isBookmarked={isBookmarked} />
      <TrendingPlay>
        <TrendingPlayIcon src={playIcon} alt="play" />
        <TrendingPlayText>Play</TrendingPlayText>
      </TrendingPlay>
      <TrendingInfoWrapper>
        <TrendingInfoDetails>
          <TrendingInfoText>{year}</TrendingInfoText>
          <TrendingInfoDot />
          <TrendingMovieIcon />
          <TrendingInfoText>{category}</TrendingInfoText>
          <TrendingInfoDot />
          <TrendingInfoText>{rating}</TrendingInfoText>
        </TrendingInfoDetails>
        <TrendingMovieTitle>{title}</TrendingMovieTitle>
      </TrendingInfoWrapper>
    </TrendingCardWrapper>
  )
}
