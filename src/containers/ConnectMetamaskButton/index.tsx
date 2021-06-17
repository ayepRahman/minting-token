import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Button } from "@chakra-ui/react";
import { injected } from "web3/connectors";
import { useEagerConnect, useInactiveListener } from "web3/hooks";

const ConnectMetamaskButton = () => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  console.log({
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  });

  return (
    <Button bg="green.300" color="white" onClick={() => activate(injected)}>
      Let's get started!
    </Button>
  );
};

export default ConnectMetamaskButton;
