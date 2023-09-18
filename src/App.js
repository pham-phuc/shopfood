import Homepage from "./pages/use/Homepage/Homepage.js";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router.js";
import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </div>
  );
}

export default App;
