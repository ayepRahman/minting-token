import React from "react";
import { Routes } from "enums/Routes";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
