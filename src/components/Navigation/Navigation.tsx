import bookmark from "../../images/bookmark.svg";
import defalutAvatar from "../../images/defalutAvatar.svg";
import home from "../../images/home.svg";
import logo from "../../images/logo.svg";
import movies from "../../images/movies.svg";
import tvSeries from "../../images/tvSeries.svg";
import {
  Nav,
  NavigationItem,
  NavigationItemImage,
  NavigationList,
  NavigationLogo,
  NavigationUserImage,
  WrapperNavigation,
} from "./styled";
export default function Navigation() {
  return (
    <Nav>
      <WrapperNavigation>
        <NavigationLogo src={logo} />
        <NavigationList>
          <NavigationItem>
            <NavigationItemImage src={home} />
          </NavigationItem>
          <NavigationItem>
            <NavigationItemImage src={movies} />
          </NavigationItem>
          <NavigationItem>
            <NavigationItemImage src={tvSeries} />
          </NavigationItem>
          <NavigationItem>
            <NavigationItemImage src={bookmark} />
          </NavigationItem>
        </NavigationList>
      </WrapperNavigation>
      <div>
        <NavigationUserImage src={defalutAvatar} />
      </div>
    </Nav>
  );
}
