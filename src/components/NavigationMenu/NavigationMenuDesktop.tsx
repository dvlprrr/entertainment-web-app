import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import {
  BookmarkIcon,
  HomeIcon,
  MoviesIcon,
  NavigationItem,
  NavigationList,
  NavigationLogo,
  TvSeriesIcon,
  WrapperNavigation,
} from "./styled";

export function NavigationMenuDesktop() {
  return (
    <WrapperNavigation>
      <NavigationLogo src={logo} />
      <NavigationList>
        <Link to="/">
          <NavigationItem>
            <HomeIcon />
          </NavigationItem>
        </Link>
        <Link to="/movies">
          <NavigationItem>
            <MoviesIcon />
          </NavigationItem>
        </Link>
        <Link to="/tv-series">
          <NavigationItem>
            <TvSeriesIcon />
          </NavigationItem>
        </Link>
        <NavigationItem>
          <BookmarkIcon />
        </NavigationItem>
      </NavigationList>
    </WrapperNavigation>
  );
}
