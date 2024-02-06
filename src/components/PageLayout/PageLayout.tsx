import { Outlet } from "react-router-dom"
import { NavigationMenu } from "../NavigationMenu/NavigationMenu"
import { Search } from "../Search/Search"

export function PageLayout() {
  return (
    <>
      <NavigationMenu />
      <Search />
      <Outlet />
    </>
  )
}
