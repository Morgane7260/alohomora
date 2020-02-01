import React from "react";
import { Route, Switch } from "react-router-dom";
import Accueil from "./component/Acceuil/Accueil";
import "./component/Acceuil/accueil.css";
import JKRpage from "./component/JKRpage/JKRpage";
import Oeuvres from "./component/Oeuvres/Oeuvres";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/alohomora">
          <Accueil />
        </Route>
        <Route path="/alohomora/JKRowling">
          <JKRpage />
        </Route>
        <Route path="/alohomora/oeuvres">
          <Oeuvres/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
