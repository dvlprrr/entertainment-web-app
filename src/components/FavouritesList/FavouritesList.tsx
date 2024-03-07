/* eslint-disable react/jsx-fragments */
import { Fragment } from "react"
import { useGetFavouriteMoviesForCurrentUser } from "../../pages/hooks/useGetFavouriteMoviesForCurrentUser"
import { Movie } from "../../types/Movie"
import { MovieCard } from "../MovieCard/MovieCard"
import {
  FavouritesListWrapper,
  FavouritesTitle,
  FavouritesWrapper,
} from "./styled"

export function FavouritesList() {
  const { favourites } = useGetFavouriteMoviesForCurrentUser()

  return (
    <FavouritesWrapper>
      {favourites &&
        Object?.keys(favourites)?.map((key: string) => (
          <Fragment key={key}>
            <FavouritesTitle>{key}</FavouritesTitle>
            <FavouritesListWrapper>
              {favourites[key].map((item: Movie) => (
                <MovieCard key={item.id} {...item} />
              ))}
            </FavouritesListWrapper>
          </Fragment>
        ))}
    </FavouritesWrapper>
  )
}
