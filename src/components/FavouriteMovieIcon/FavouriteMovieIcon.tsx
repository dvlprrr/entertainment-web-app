import { FavouriteMovie, FavouriteMovieWrapper } from "./styled"

type FavouriteMovieIconT = {
  onClick: () => void
}
export function FavouriteMovieIcon({ onClick }: FavouriteMovieIconT) {
  const isBookmarked = true
  return (
    <FavouriteMovieWrapper onClick={onClick} isBookmarked={isBookmarked}>
      <FavouriteMovie />
    </FavouriteMovieWrapper>
  )
}
