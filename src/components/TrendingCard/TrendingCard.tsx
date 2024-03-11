import playIcon from "../../images/playIcon.svg"

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

export function TrendingCard() {
  const onClick = () => {
    // toggleFavourite(id)
    console.log("click в трендах")
  }
  return (
    <TrendingCardWrapper url="asas">
      <FavouriteMovieIcon onClick={onClick} />
      <TrendingPlay>
        <TrendingPlayIcon src={playIcon} alt="play" />
        <TrendingPlayText>Play</TrendingPlayText>
      </TrendingPlay>
      <TrendingInfoWrapper>
        <TrendingInfoDetails>
          <TrendingInfoText>2023</TrendingInfoText>
          <TrendingInfoDot />
          <TrendingMovieIcon />
          <TrendingInfoText>asd</TrendingInfoText>
          <TrendingInfoDot />
          <TrendingInfoText>afafa</TrendingInfoText>
        </TrendingInfoDetails>
        <TrendingMovieTitle>afas</TrendingMovieTitle>
      </TrendingInfoWrapper>
    </TrendingCardWrapper>
  )
}
