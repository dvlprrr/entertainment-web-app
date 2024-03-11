import { Wrench } from "@phosphor-icons/react"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { selectCurrentUser } from "../../features/users/users-selectors"
import { logOut } from "../../features/users/users-slice"
import { NavigationMenuDesktop } from "./NavigationMenuDesktop"
import { NavigationMenuMobile } from "./NavigationMenuMobile"
import {
  Nav,
  NavigationImageWrapper,
  NavigationUserImage,
  SignOutIcon,
  StyledTooltip,
  TooltipItem,
  TooltipLink,
  TooltipMenu,
} from "./styled"

export function NavigationMenu() {
  const isMatches768 = useMediaQuery({ query: "(max-width: 768px)" })
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const handleLogout = useCallback(() => {
    dispatch(logOut())
  }, [dispatch])
  return (
    <Nav>
      {!isMatches768 ? <NavigationMenuDesktop /> : <NavigationMenuMobile />}
      <NavigationImageWrapper id="settings">
        <NavigationUserImage src={user?.avatar} />
      </NavigationImageWrapper>
      <StyledTooltip
        anchorSelect="#settings"
        clickable
        place={isMatches768 ? "bottom" : "right"}
      >
        <TooltipMenu>
          <TooltipItem>
            <TooltipLink to="settings">
              <Wrench size={16} />
              Settings
            </TooltipLink>
          </TooltipItem>
          <TooltipItem>
            <TooltipLink onClick={handleLogout} to="sign-in">
              <SignOutIcon />
              Log Out
            </TooltipLink>
          </TooltipItem>
        </TooltipMenu>
      </StyledTooltip>
    </Nav>
  )
}
