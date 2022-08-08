import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";

function App() {
  return (
    <div className="App">

<Router>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact page</a>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
 
    </div>
  );
}

export default App;
