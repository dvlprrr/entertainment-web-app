import styled from "styled-components"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const MoviesPageWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 426px) {
    margin-top: 25px;
  }
`

export const TVSeriesPageWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 426px) {
    margin-top: 25px;
  }
`

export const FavouritePageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 426px) {
    margin-top: 25px;
    gap: 30px;
  }
`
