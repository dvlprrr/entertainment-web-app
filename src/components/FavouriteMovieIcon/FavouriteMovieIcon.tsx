import { FavouriteMovie, FavouriteMovieWrapper } from "./styled"

interface FavouriteMovieIconProps {
  isBookmarked: boolean
}

export function FavouriteMovieIcon({ isBookmarked }: FavouriteMovieIconProps) {
  return (
    <FavouriteMovieWrapper isBookmarked={isBookmarked}>
      <FavouriteMovie />
    </FavouriteMovieWrapper>
  )
}
