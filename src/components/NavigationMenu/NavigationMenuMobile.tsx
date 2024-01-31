import logo from "../../images/logo.svg";
import {
  BookmarkIcon,
  HomeIcon,
  MoviesIcon,
  NavigationItem,
  NavigationList,
  NavigationLogo,
  TvSeriesIcon,
} from "./styled";
export function NavigationMenuMobile() {
  return (
    <>
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
    </>
  );
}
