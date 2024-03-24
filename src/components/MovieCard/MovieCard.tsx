/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { selectCurrentUser } from "../../features/users/users-selectors"
import { toggleFavourite } from "../../features/users/users-slice"
import playIcon from "../../images/playIcon.svg"
import { useAppDispatch } from "../../redux-hooks"
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
  const isMatches768 = useMediaQuery({ query: "(max-width: 768px)" })

  const user = useSelector(selectCurrentUser)
  const dispatch = useAppDispatch()

  const queryClient = useQueryClient()
  const handleToggleFavourite = (movieId: number) => {
    dispatch(toggleFavourite({ movieId }))
      .unwrap()
      .then(() => queryClient.invalidateQueries(["favourite"]))
  }
  const isFavouriteMovie = user?.favourite_movies.includes(id)
  return (
    <div>
      <RecomendedCardMovieWrapper url={url}>
        <FavouriteMovieIcon
          isBookmarked={isFavouriteMovie || false}
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
}
