import { isEqual } from "lodash"
import { memo } from "react"
import { BookmarkedMovie, BookmarkedMovieWrapper } from "./styled"

type BookmarkedMovieIconT = {
  onClick: () => void
  isBookmarked: boolean
}
export const BookmarkedMovieIcon = memo(
  ({ onClick, isBookmarked }: BookmarkedMovieIconT) => (
    <BookmarkedMovieWrapper onClick={onClick} isBookmarked={isBookmarked}>
      <BookmarkedMovie />
    </BookmarkedMovieWrapper>
  ),
  isEqual,
)
