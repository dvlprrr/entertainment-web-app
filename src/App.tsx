import Navigation from "./components/Navigation/Navigation";
import Search from "./components/Search/Search";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="page">
      <main className="main">
        <Navigation />
        <Search />
        <HomePage />
      </main>
    </div>
  );
}

export default App;
