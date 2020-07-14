import React from "react";
import ReactDOM from "react-dom";
import Danke from "./Components/danke.jsx";
import Startseite from "./Components/Startseite.jsx";
import Formula from "./Components/Formula";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/formula" render={() => <Formula type={"Formula"} />} />
          <Route exact path="/">
            <Startseite />
          </Route>
          <Route path="/danke" component={Danke} />
          <Route path="*">
            <h2>404 Nicht Gefunden</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
