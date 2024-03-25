import playIcon from "../../images/playIcon.svg"
import { Film } from "../../types/Film"

import { toggleFavourite } from "../../features/users/users-slice"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import { useAppDispatch } from "../../redux-hooks"
import { BookmarkedMovieIcon } from "../BookmarkedMovieIcon/BookmarkedMovieIcon"
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
}: Omit<Film, "genres">) {
  const currentUser = useCurrentUser()
  const dispatch = useAppDispatch()

  const handleToggleFavourite = (movieId: number) => {
    dispatch(toggleFavourite({ movieId })).unwrap()
  }
  const isFavouriteMovie = currentUser?.favourite_movies.includes(id)
  return (
    <TrendingCardWrapper url={url}>
      <BookmarkedMovieIcon
        isBookmarked={Boolean(isFavouriteMovie) || false}
        onClick={() => handleToggleFavourite(id)}
      />
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
