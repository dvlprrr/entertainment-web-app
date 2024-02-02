import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Registration } from "./components/auth/Registration"
import { FavouritePage } from "./pages/FavouritePage"
import { HomePage } from "./pages/HomePage"
import { MoviesPage } from "./pages/MoviesPage"
import { TVSeriesPage } from "./pages/TVSeriesPage"

function App() {
  return (
    <div className="page">
      <main className="main">
        {/* TODO:сделать протектед роут */}
        {/* <NavigationMenu />
        <Search /> */}
        <Routes>
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/sign-in" element={<Login />} />
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
