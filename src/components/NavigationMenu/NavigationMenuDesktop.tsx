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
        <NavigationItem>
          <HomeIcon />
        </NavigationItem>
        <NavigationItem>
          <MoviesIcon />
        </NavigationItem>
        <NavigationItem>
          <TvSeriesIcon />
        </NavigationItem>
        <NavigationItem>
          <BookmarkIcon />
        </NavigationItem>
      </NavigationList>
    </WrapperNavigation>
  );
}
