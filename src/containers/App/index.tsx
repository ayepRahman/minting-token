import React from "react";
import { Routes } from "enums/Routes";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Market from "pages/Market";

const App = () => {
  return (
    <Switch>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
      <Route exact path={Routes.MARKET}>
        <Market />
      </Route>
    </Switch>
  );
};

export default App;
