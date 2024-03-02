import { config } from "./config"
import {
  SettingsNavigationItem,
  SettingsNavigationListWrapper,
  SettingsNavigationWrapper,
  StyledLink,
} from "./styled"

export function SettingsNavigation() {
  return (
    <SettingsNavigationWrapper>
      <SettingsNavigationListWrapper>
        {config.map((item) => (
          <StyledLink to={item.path}>
            <SettingsNavigationItem>
              <item.icon size={16} />
              {item.title}
            </SettingsNavigationItem>
          </StyledLink>
        ))}
      </SettingsNavigationListWrapper>
    </SettingsNavigationWrapper>
  )
}
