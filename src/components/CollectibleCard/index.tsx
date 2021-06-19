import React from "react";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

export interface CollectibleCardProps {
  src: string;
  name: string;
  eth: number;
  ownerAddress?: string;
}

const CollectibleCard: React.FC<CollectibleCardProps> = ({
  src,
  name,
  eth,
  ownerAddress,
}) => {
  return (
    <Box overflow="hidden" borderRadius="0.5rem" boxShadow="lg">
      <Img height="16rem" width="100%" src={src} />
      <Box padding="1rem">
        <Text mb="0.25rem" fontSize="md">
          {name}
        </Text>
        <Text mb="0.25rem" fontSize="xs" color="gray.500">
          USD ${eth}
        </Text>
        <Text mb="0.5rem" fontSize="xs" color="gray.500">
          ETH {eth}
        </Text>
        <Flex>
          <Button bg="green.300" color="white" size="xs">
            Buy Token
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CollectibleCard;
