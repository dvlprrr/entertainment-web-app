import defalutAvatar from "../../images/defalutAvatar.svg";

import logo from "../../images/logo.svg";

import {
  BookmarkIcon,
  HomeIcon,
  MoviesIcon,
  Nav,
  NavigationItem,
  NavigationList,
  NavigationLogo,
  NavigationUserImage,
  TvSeriesIcon,
  WrapperNavigation,
} from "./styled";
export default function Navigation() {
  return (
    <Nav>
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
      <div>
        <NavigationUserImage src={defalutAvatar} />
      </div>
    </Nav>
  );
}
