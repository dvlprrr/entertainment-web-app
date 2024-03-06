/* eslint-disable react/jsx-fragments */
import { Fragment } from "react"
import { useGetFavouriteMoviesForCurrentUser } from "../../pages/hooks/useGetFavouriteMoviesForCurrentUser"
import { Movie } from "../../types/Movie"
import { RecommendedCard } from "../RecommendedCard/RecommendedCard"
import {
  RecomendedListWrapper,
  RecomendedTitle,
  RecomendedWrapper,
} from "./styled"

export function RecommendedList() {
  const { favourites } = useGetFavouriteMoviesForCurrentUser()

  return (
    <RecomendedWrapper>
      <RecomendedListWrapper>
        {favourites &&
          Object?.keys(favourites)?.map((key: string) => (
            <Fragment key={key}>
              <RecomendedTitle>{key}</RecomendedTitle>
              {favourites[key].map((item: Movie) => (
                <RecommendedCard key={item.id} {...item} />
              ))}
            </Fragment>
          ))}
      </RecomendedListWrapper>
    </RecomendedWrapper>
  )
}
