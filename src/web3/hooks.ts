import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "web3/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import Collectible from "abis/Collectible.json";
import { setContract } from "redux/contract";
import { useAppDispatch } from "redux/hooks";

export const useWeb3Client = () => {
  const triedEager = useEagerConnect();
  useLoadSmartContract();
  useInactiveListener(!triedEager);
};

export const useLoadSmartContract = () => {
  const dispatch = useAppDispatch();
  const { account, library } = useWeb3React<Web3Provider>();
  if (account && library) {
    // TODO: - to find a better way of passing contractAddress instead of hardcode value.
    const contractAddress = "0x7169668857DCE9E2E7b5D009afD63Df4c99B294B";
    const contract = new Contract(
      contractAddress,
      Collectible.abi,
      library.getSigner()
    );
    dispatch(setContract(contract));
  } else {
    console.warn(
      "[useLoadSmartContract]: Smart contract not deployed to detected network!"
    );
  }
};

/**
 * handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
 */
export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};

/**
 * handle logic to connect in reaction to certain events on the injected ethereum provider, if it existss
 */
export const useInactiveListener = (suppress: boolean = false) => {
  const { active, error, activate } = useWeb3React();

  useEffect((): any => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(injected);
      };
      const handleChainChanged = (chainId: string | number) => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(injected);
      };
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("Handling 'accountsChanged' event with payload", accounts);
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      const handleNetworkChanged = (networkId: string | number) => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(injected);
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
};
