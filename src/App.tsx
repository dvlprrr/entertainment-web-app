import { Route, Routes } from "react-router-dom"
import { PageLayout } from "./components/PageLayout/PageLayout"
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
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tv-series" element={<TVSeriesPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
          </Route>
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
