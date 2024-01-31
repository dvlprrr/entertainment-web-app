import { useMediaQuery } from "react-responsive";
import defalutAvatar from "../../images/defalutAvatar.svg";

import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { NavigationMenuMobile } from "./NavigationMenuMobile";
import { Nav, NavigationImageWrapper, NavigationUserImage } from "./styled";

export function NavigationMenu() {
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Nav>
      {!isWidth768 ? <NavigationMenuDesktop /> : <NavigationMenuMobile />}
      <NavigationImageWrapper>
        <NavigationUserImage src={defalutAvatar} />
      </NavigationImageWrapper>
    </Nav>
  );
}
