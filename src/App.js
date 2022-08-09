import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Team from "./components/pages/about/team";
import WhatWeDo from "./components/pages/about/what-we-do";

import Layout from "./components/layout/main";

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="about" element={<About />}>
                  <Route path="team" element={<Team />} />
                  <Route path="what-we-do" element={<WhatWeDo />} />
                </Route>
              </Route>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
