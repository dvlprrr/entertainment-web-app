import { toggleFavourite } from "../../hooks/service"
import playIcon from "../../images/playIcon.svg"
import { Movie } from "../../types/Movie"

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

export function TrendingCard({
  id,
  title,
  url,
  year,
  ageRating,
  filmType,
}: Omit<Movie, "genres">) {
  const onClick = () => {
    toggleFavourite(id)
  }
  return (
    <TrendingCardWrapper url={url}>
      <FavouriteMovieIcon onClick={onClick} />
      <TrendingPlay>
        <TrendingPlayIcon src={playIcon} alt="play" />
        <TrendingPlayText>Play</TrendingPlayText>
      </TrendingPlay>
      <TrendingInfoWrapper>
        <TrendingInfoDetails>
          <TrendingInfoText>{year}</TrendingInfoText>
          <TrendingInfoDot />
          <TrendingMovieIcon />
          <TrendingInfoText>{filmType}</TrendingInfoText>
          <TrendingInfoDot />
          <TrendingInfoText>{ageRating}</TrendingInfoText>
        </TrendingInfoDetails>
        <TrendingMovieTitle>{title}</TrendingMovieTitle>
      </TrendingInfoWrapper>
    </TrendingCardWrapper>
  )
}
