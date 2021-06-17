import React from "react";
import { Routes } from "enums/Routes";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Market from "pages/Market";
import { useWeb3Client } from "web3/hooks";

const App = () => {
  useWeb3Client();

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
