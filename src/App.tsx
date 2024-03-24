import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { PageLayout } from "./components/PageLayout/PageLayout"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { AddMovie } from "./components/Settings/AddMovie/AddMovie"
import { Dashboard } from "./components/Settings/Dashboard/Dashboard"
import { EditProfile } from "./components/Settings/EditProfile/EditProfile"
import { getAgeRatings } from "./features/age_ratings/age_ratings-slice"
import { Login } from "./features/auth/Login"
import { Registration } from "./features/auth/Registration"
import { getFilmTypes } from "./features/film_types/film_types-slice"
import { getGenres } from "./features/genres/genres-slice"
import { FavouritePage } from "./pages/FavouritePage"
import { HomePage } from "./pages/HomePage"
import { MoviesPage } from "./pages/MoviesPage"
import { SettingsPage } from "./pages/SettingsPage"
import { TVSeriesPage } from "./pages/TVSeriesPage"
import { useAppDispatch } from "./redux-hooks"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGenres())
    dispatch(getFilmTypes())
    dispatch(getAgeRatings())
  }, [dispatch])
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
            <Route path="edit" element={<EditProfile />} />
          </Route>
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
