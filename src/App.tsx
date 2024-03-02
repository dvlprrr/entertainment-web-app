import { Route, Routes } from "react-router-dom"
import { PageLayout } from "./components/PageLayout/PageLayout"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { AddMovie } from "./components/Settings/AddMovie"
import { Dashboard } from "./components/Settings/Dashboard"
import { Login } from "./features/auth/Login"
import { Registration } from "./features/auth/Registration"
import { FavouritePage } from "./pages/FavouritePage"
import { HomePage } from "./pages/HomePage"
import { MoviesPage } from "./pages/MoviesPage"
import { SettingsPage } from "./pages/SettingsPage"
import { TVSeriesPage } from "./pages/TVSeriesPage"

function App() {
  return (
    <div className="page">
      <main className="main">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<PageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/tv-series" element={<TVSeriesPage />} />
              <Route path="/favourite" element={<FavouritePage />} />
            </Route>
          </Route>
          <Route path="settings" element={<SettingsPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-movies" element={<AddMovie />} />
            <Route path="edit" />
          </Route>
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
