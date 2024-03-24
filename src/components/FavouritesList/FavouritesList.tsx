/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useGetFavouriteMoviesForCurrentUser } from "../../pages/hooks/useGetFavouriteMoviesForCurrentUser"
import { Movie } from "../../types/Movie"
import { MovieCard } from "../MovieCard/MovieCard"
import {
  EmptyListTitle,
  FavouritesListWrapper,
  FavouritesTitle,
  FavouritesWrapper,
} from "./styled"

export function FavouritesList() {
  const [params] = useSearchParams()
  const searchValue = params.get("search")
  const { favourites, refetch } = useGetFavouriteMoviesForCurrentUser(
    searchValue || "",
  )
  useEffect(() => {
    refetch()
  }, [searchValue, refetch])
  if (
    favourites &&
    Object.values(favourites).length === 0 &&
    searchValue?.length
  ) {
    return (
      <EmptyListTitle>{`Found 0 results for ‘${searchValue}’`}</EmptyListTitle>
    )
  }
  return (
    <FavouritesWrapper>
      {favourites && Object.values(favourites).length > 0
        ? Object?.keys(favourites)?.map((key: string) => (
            <div key={key}>
              <FavouritesTitle>
                {searchValue
                  ? `Found ${favourites[key]?.length} ${key} for ‘${searchValue}’`
                  : `Bookmarked ${key}`}
              </FavouritesTitle>
              <FavouritesListWrapper>
                {favourites[key].map((item: Movie) => (
                  <MovieCard key={item.id} {...item} />
                ))}
              </FavouritesListWrapper>
            </div>
          ))
        : "Your list with favourites is empty"}
    </FavouritesWrapper>
  )
}
