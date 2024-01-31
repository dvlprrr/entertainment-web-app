import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { Search } from "./components/Search/Search";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="page">
      <main className="main">
        <NavigationMenu />
        <Search />
        <HomePage />
      </main>
    </div>
  );
}

export default App;
