import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Home />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
