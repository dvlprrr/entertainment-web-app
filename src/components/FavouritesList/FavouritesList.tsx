/* eslint-disable react/jsx-fragments */
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
          <div key={key}>
            <FavouritesTitle>{key}</FavouritesTitle>
            <FavouritesListWrapper>
              {favourites[key].map((item: Movie) => (
                <MovieCard key={item.id} {...item} />
              ))}
            </FavouritesListWrapper>
          </div>
        ))}
    </FavouritesWrapper>
  )
}
