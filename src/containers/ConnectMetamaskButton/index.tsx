import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Button } from "@chakra-ui/react";
import { injected } from "web3/connectors";

const ConnectMetamaskButton = () => {
  const { activate } = useWeb3React();

  return (
    <Button bg="green.300" color="white" onClick={() => activate(injected)}>
      Let's get started!
    </Button>
  );
};

export default ConnectMetamaskButton;
