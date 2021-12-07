import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./containers/BaseLayout";
import Home from "./pages/Home"
import "./assets/baselayout.css"
import MapPage from "./pages/MapPage";
import TerminalDetail from "./pages/TerminalDetail";


function App() {
  const [token, setToken] = useState("");

  const userLogin = (tok) => {
    console.log(tok);
    setToken(tok);
  };

  return (
    <div>
      <div className="App">
        <Router>
          <BaseLayout>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map/" element={<MapPage />} />
              <Route path="/terminal/:terminalID" element={<TerminalDetail/>} />
              <Route>404 Not Found!</Route>
            </Routes>

          </BaseLayout>
        </Router>
      </div>
    </div>
  );
}

export default App;
