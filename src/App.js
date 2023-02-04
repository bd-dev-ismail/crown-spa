import { RouterProvider } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
