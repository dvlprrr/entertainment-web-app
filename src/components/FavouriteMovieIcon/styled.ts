import styled from "styled-components"
import { ReactComponent as Favourite } from "../../images/favouriteMovie.svg"

export const FavouriteMovie = styled(Favourite)`
  cursor: pointer;
`

export const FavouriteMovieWrapper = styled.div<{ isbookmarked: boolean }>`
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
    props.isbookmarked
      ? `${FavouriteMovie} {
      path {
        transition: 0.3s ease;
        fill: #fff;
      }
    }

    &:hover {
      ${FavouriteMovie} {
        path {
          fill: #161d2f;
        }
      }
    }
    `
      : ` &:hover {
        transition: 0.3s ease;
        background-color: #ffffff;
        ${FavouriteMovie} {
          path {
            transition: 0.3s ease;
            stroke: #161d2f;
          }
        }
      } `}
`
