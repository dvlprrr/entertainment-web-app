import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import styled from "styled-components"
import { ReactComponent as Bookmark } from "../../images/bookmark.svg"
import { ReactComponent as Edit } from "../../images/editIcon.svg"
import { ReactComponent as Home } from "../../images/home.svg"
import { ReactComponent as Movies } from "../../images/movies.svg"
import { ReactComponent as SignOut } from "../../images/signOut.svg"
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
  z-index: 1;

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    max-width: 100%;
    height: calc(100vh - 90%);
    padding: 18px 24px;
    border-radius: 8px;
  }
  @media (max-width: 426px) {
    position: fixed;
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
  border-radius: 50%;
  object-fit: cover;
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

export const StyledTooltip = styled(Tooltip)`
  background-color: #fc4747 !important;
  margin-left: 20px;
  border-radius: 12px !important;
  padding: 10px 15px !important;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const TooltipMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TooltipItem = styled.li`
  margin: 0;
  list-style-type: none;
  font-size: 15px;
  transition: color 0.3s;

  &:hover {
    color: #000000;
  }
`

export const SignOutIcon = styled(SignOut)`
  width: 15px;
  height: 15px;

  path {
    fill: currentColor;
  }
`

export const EditIcon = styled(Edit)`
  width: 15px;
  height: 15px;

  path {
    fill: currentColor;
  }
`

export const TooltipLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: currentColor;
`
