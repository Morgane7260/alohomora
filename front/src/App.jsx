import React from "react";
import { Route, Switch } from "react-router-dom";
import Accueil from "./component/Acceuil/Accueil";
import "./component/Acceuil/accueil.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Accueil />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
