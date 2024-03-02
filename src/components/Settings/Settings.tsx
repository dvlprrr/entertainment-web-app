import { Outlet } from "react-router-dom"
import { SettingsNavigation } from "./SettingsNavigation"

export function Settings() {
  return (
    <>
      <SettingsNavigation />
      <Outlet />
    </>
  )
}
