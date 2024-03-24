import { FavouriteMovie, FavouriteMovieWrapper } from "./styled"

type FavouriteMovieIconT = {
  onClick: () => void
  isBookmarked: boolean
}
export function FavouriteMovieIcon({
  onClick,
  isBookmarked,
}: FavouriteMovieIconT) {
  return (
    <FavouriteMovieWrapper onClick={onClick} isBookmarked={isBookmarked}>
      <FavouriteMovie />
    </FavouriteMovieWrapper>
  )
}
