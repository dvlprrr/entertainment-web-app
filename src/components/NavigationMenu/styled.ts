import styled from "styled-components"
import { ReactComponent as Bookmark } from "../../images/bookmark.svg"
import { ReactComponent as Home } from "../../images/home.svg"
import { ReactComponent as Movies } from "../../images/movies.svg"
import { ReactComponent as TvSeries } from "../../images/tvSeries.svg"

const baseIconStyles = `
  cursor: pointer;
  height: 20px;
  width: fit-content;

  path {
    transition: fill 0.3s ease;
    fill: currentColor;
  }

  &:hover {
    path {
      transition: fill 0.3s ease; 
      fill: #FC4747; 
    }
  }
  @media (max-width: 426px) {
    height: 16px;
  }
`

export const Nav = styled.nav`
  position: fixed;
  top: 32px;
  left: 32px;
  border-radius: 20px;
  background-color: #161d2f;
  height: calc(100vh - 7%);
  max-width: 96px;
  width: 100%;
  padding: 32px 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    max-width: 100%;
    height: calc(100vh - 90%);
    padding: 18px 24px;
  }
  @media (max-width: 426px) {
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
    z-index: 3;
    height: 50px;
  }
`

export const WrapperNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 75px;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 65%;
    gap: 0;
  }
`

export const NavigationLogo = styled.img`
  width: 32px;
  cursor: pointer;

  @media (max-width: 426px) {
    width: 25px;
  }
`

export const NavigationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 426px) {
    gap: 24px;
  }
`

export const NavigationItem = styled.li`
  height: 20px;

  @media (max-width: 426px) {
    height: 16px;
  }
`

export const HomeIcon = styled(Home)`
  ${baseIconStyles};
`

export const BookmarkIcon = styled(Bookmark)`
  ${baseIconStyles}
`

export const MoviesIcon = styled(Movies)`
  ${baseIconStyles}
`

export const TvSeriesIcon = styled(TvSeries)`
  ${baseIconStyles}
`

export const NavigationUserImage = styled.img`
  cursor: pointer;
  width: 100%;
`

export const NavigationImageWrapper = styled.div`
  align-self: center;
  height: 40px;
  width: 40px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 426px) {
    width: 24px;
    height: 24px;
  }
`
