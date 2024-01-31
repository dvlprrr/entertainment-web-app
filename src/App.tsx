import { Route, Routes } from "react-router-dom";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { Search } from "./components/Search/Search";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { TvSeriesPage } from "./pages/TvSeriesPage";

function App() {
  return (
    <div className="page">
      <main className="main">
        <NavigationMenu />
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TvSeriesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
