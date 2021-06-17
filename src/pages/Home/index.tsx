import React from "react";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import ConnectMetamaskButton from "containers/ConnectMetamaskButton";
import { Routes } from "enums/Routes";

const Home = () => {
  const history = useHistory();
  const { active } = useWeb3React();

  React.useEffect(() => {
    if (active) {
      history.push(Routes.MARKET);
    }
  }, [active, history]);

  return (
    <div>
      <h1>Home page</h1>
      <ConnectMetamaskButton />
    </div>
  );
};

export default Home;
