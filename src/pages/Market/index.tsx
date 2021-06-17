import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Box, Container, Text, Grid } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import CreateCollectibleModal from "containers/CreateCollectibleModal";
import CollectibleCard from "components/CollectibleCard";
import { mockCollectible } from "mocks/collectible";

/**
 * CREATE integration with smart contract
 * LIST token integration with smart contract
 */

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
        <CreateCollectibleModal />
      </Container>
    </Box>
  );
};

const CollectibleList = () => {
  return (
    <>
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
    </>
  );
};

const Market = () => {
  return (
    <div>
      <Header />
      <Container maxW="container.lg">
        <Grid mt="2rem" templateColumns="repeat(4, 1fr)" gap={6}>
          <CollectibleList />
        </Grid>
      </Container>
    </div>
  );
};

export default Market;
