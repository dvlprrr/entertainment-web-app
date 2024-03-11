<<<<<<< Updated upstream
import { config } from "./config"
=======
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import { congigRoutePath } from "./config"
>>>>>>> Stashed changes
import {
  SettingsLogo,
  SettingsNavigationItem,
  SettingsNavigationListWrapper,
  SettingsNavigationWrapper,
  StyledLink,
} from "./styled"

export function SettingsNavigation() {
  return (
    <SettingsNavigationWrapper>
      <Link to="/">
        <SettingsLogo src={logo} alt="logo" />
      </Link>
      <SettingsNavigationListWrapper>
        {config.map((item) => (
          <StyledLink key={item.path} to={item.path}>
            <SettingsNavigationItem>
              <item.icon size={24} />
              {item.title}
            </SettingsNavigationItem>
          </StyledLink>
        ))}
      </SettingsNavigationListWrapper>
    </SettingsNavigationWrapper>
  )
}
