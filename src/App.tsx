import { Route, Routes } from "react-router-dom"
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu"
import { Search } from "./components/Search/Search"
import { FavouritePage } from "./pages/FavouritePage"
import { HomePage } from "./pages/HomePage"
import { MoviesPage } from "./pages/MoviesPage"
import { TVSeriesPage } from "./pages/TVSeriesPage"

function App() {
  return (
    <div className="page">
      <main className="main">
        <NavigationMenu />
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TVSeriesPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
