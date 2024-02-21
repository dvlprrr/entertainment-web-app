import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { logOut } from "../../features/users-slice"
import defalutAvatar from "../../images/defalutAvatar.svg"
import { NavigationMenuDesktop } from "./NavigationMenuDesktop"
import { NavigationMenuMobile } from "./NavigationMenuMobile"
import {
  AdminIcon,
  EditIcon,
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
  const isWidth768 = useMediaQuery({ query: "(max-width: 768px)" })
  const dispatch = useDispatch()
  const handleLogout = useCallback(() => {
    dispatch(logOut())
  }, [dispatch])
  return (
    <Nav>
      {!isWidth768 ? <NavigationMenuDesktop /> : <NavigationMenuMobile />}
      <NavigationImageWrapper id="settings">
        <NavigationUserImage src={defalutAvatar} />
      </NavigationImageWrapper>
      <StyledTooltip
        anchorSelect="#settings"
        clickable
        place={isWidth768 ? "bottom" : "right"}
      >
        <TooltipMenu>
          <TooltipItem>
            <TooltipLink to="">
              <AdminIcon />
              Admin
            </TooltipLink>
          </TooltipItem>
          <TooltipItem>
            <TooltipLink to="">
              <EditIcon />
              Edit
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
