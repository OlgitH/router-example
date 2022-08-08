import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Layout from "./components/layout/main";

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
              </Route>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
