import React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Box,
  Container,
  Text,
  Grid,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import CreateCollectibleModal from "containers/CreateCollectibleModal";
import CollectibleLists from "containers/CollectibleLists";
import { useHistory } from "react-router-dom";
import { Routes } from "enums/Routes";

/**
 * TODO:
 * LIST token integration with smart contract!
 * ConnectMetamaskButton UI enhancement!
 */
const UserDropdown = () => {
  const { account, deactivate } = useWeb3React();

  return (
    <Menu>
      <MenuButton ml="0.5rem" cursor="pointer" size="sm" as={Avatar} />
      <MenuList>
        <MenuItem>Address: {account}</MenuItem>
        <MenuItem onClick={() => deactivate()}>Disconnect</MenuItem>
      </MenuList>
    </Menu>
  );
};

const Header = () => {
  return (
    <Box padding="1rem" boxShadow="lg">
      <Container
        maxW="container.lg"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <Text>Marketplace</Text>
        <Flex>
          <CreateCollectibleModal />
          <UserDropdown />
        </Flex>
      </Container>
    </Box>
  );
};

const Market = () => {
  const web3React = useWeb3React();
  const history = useHistory();

  React.useEffect(() => {
    if (!web3React.active) {
      history.push(Routes.HOME);
    }
  }, [history, web3React.active]);

  return (
    <div>
      <Header />
      <Container maxW="container.lg">
        <Grid mt="2rem" templateColumns="repeat(4, 1fr)" gap={6}>
          <CollectibleLists />
        </Grid>
      </Container>
    </div>
  );
};

export default Market;
