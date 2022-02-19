import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const country = "in";

  const apiKey =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_NEWS_API
      : process.env.REACT_APP_NEWS_API;
  console.log(process.env.REACT_APP_NEWS_API);
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    return mode;
  };

  return (
    <div>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                progress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
