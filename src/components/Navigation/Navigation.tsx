import defalutAvatar from "../../images/defalutAvatar.svg";

import logo from "../../images/logo.svg";

import {
  BookmarkIcon,
  HomeIcon,
  MoviesIcon,
  Nav,
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
          <li>
            <HomeIcon />
          </li>
          <li>
            <MoviesIcon />
          </li>
          <li>
            <TvSeriesIcon />
          </li>
          <li>
            <BookmarkIcon />
          </li>
        </NavigationList>
      </WrapperNavigation>
      <div>
        <NavigationUserImage src={defalutAvatar} />
      </div>
    </Nav>
  );
}
