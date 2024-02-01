import { NavLink } from "react-router-dom"
import logo from "../../images/logo.svg"
import {
  BookmarkIcon,
  HomeIcon,
  MoviesIcon,
  NavigationItem,
  NavigationList,
  NavigationLogo,
  TvSeriesIcon,
} from "./styled"

export function NavigationMenuMobile() {
  const style = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#ffffff" : "#5A698F",
  })
  return (
    <>
      <NavigationLogo src={logo} />
      <NavigationList>
        <NavLink style={style} to="/">
          <NavigationItem>
            <HomeIcon />
          </NavigationItem>
        </NavLink>
        <NavLink style={style} to="/movies">
          <NavigationItem>
            <MoviesIcon />
          </NavigationItem>
        </NavLink>
        <NavLink style={style} to="/tv-series">
          <NavigationItem>
            <TvSeriesIcon />
          </NavigationItem>
        </NavLink>
        <NavLink style={style} to="/favourite">
          <NavigationItem>
            <BookmarkIcon />
          </NavigationItem>
        </NavLink>
      </NavigationList>
    </>
  )
}
