import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Route } from "react-router-dom";
import { Highlights } from "./components/Highlights";
import { About } from "./components/About";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v1/")
      .then((res) => res.json())
      .then((res) => {
        setApiData(res);
      });
  }, []);

  return (
    <div className="App">
      <Header data={apiData} />

      <Route exact path="/" render={() => <Main data={apiData} />} />
      <Route exact path="/about" component={About} />
      <Route
        path="/main/:title"
        // routerProps
        // match={routerProps.match}
        render={() => (
          <Highlights data={apiData} />
        )}
      />

    </div>
  );
}

export default App;
