import styled from "styled-components"
import { ReactComponent as Favourite } from "../../images/favouriteMovie.svg"

export const BookmarkedMovie = styled(Favourite)`
  cursor: pointer;
`

export const BookmarkedMovieWrapper = styled.div<{ isBookmarked: boolean }>`
  align-self: flex-end;
  border-radius: 32px;
  background-color: #161d2f;
  opacity: 0.5;
  padding: 9px 10px;
  background-size: 32px 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isBookmarked
      ? `${BookmarkedMovie} {
      path {
        transition: 0.3s ease;
        fill: #ffffff;
      }
    }

    &:hover {
      ${BookmarkedMovie} {
        path {
          fill: #161d2f;
        }
      }
    }
    `
      : ` &:hover {
        transition: 0.3s ease;
        background-color: #ffffff;
        ${BookmarkedMovie} {
          path {
            transition: 0.3s ease;
            stroke: #161d2f;
          }
        }
      } `}
`
