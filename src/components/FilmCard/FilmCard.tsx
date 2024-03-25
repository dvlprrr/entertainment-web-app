/* eslint-disable @typescript-eslint/ban-ts-comment */
import { memo, useCallback } from "react"
import { useQueryClient } from "react-query"
import { useMediaQuery } from "react-responsive"
import { toggleFavourite } from "../../features/users/users-slice"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import playIcon from "../../images/playIcon.svg"
import { useAppDispatch } from "../../redux-hooks"
import { Film } from "../../types/Film"
import { BookmarkedMovieIcon } from "../BookmarkedMovieIcon/BookmarkedMovieIcon"
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

export const FilmCard = memo(
  ({ title, url, year, ageRating, filmType, id }: Film) => {
    const isMatches768 = useMediaQuery({ query: "(max-width: 768px)" })

    const currentUser = useCurrentUser()
    const dispatch = useAppDispatch()

    const queryClient = useQueryClient()
    const handleToggleFavourite = useCallback(
      (movieId: number) => {
        dispatch(toggleFavourite({ movieId }))
          .unwrap()
          .then(() => queryClient.invalidateQueries(["favourite"]))
      },
      [dispatch, queryClient],
    )
    const isFavouriteMovie = currentUser?.favourite_movies.includes(id)
    return (
      <div>
        <RecomendedCardMovieWrapper url={url}>
          <BookmarkedMovieIcon
            isBookmarked={Boolean(isFavouriteMovie) || false}
            onClick={() => handleToggleFavourite(id)}
          />
          {!isMatches768 && (
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
  },
)
