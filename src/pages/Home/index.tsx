import React from "react";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import ConnectMetamaskButton from "containers/ConnectMetamaskButton";
import {
  Box,
  BoxProps,
  useMediaQuery,
  useTheme,
  ChakraTheme,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Routes } from "enums/Routes";
import { mockCollectible } from "mocks/collectible";

const MotionBox = motion<BoxProps>(Box);

const Home = () => {
  const history = useHistory();
  const { active } = useWeb3React();
  const { breakpoints } = useTheme<ChakraTheme>();
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.sm})`,
    `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
    `(min-width: ${breakpoints.md})`,
  ]);

  const boxWidth: string = isMobile
    ? "90vw"
    : isTablet
    ? "70vw"
    : isDesktop
    ? "25rem"
    : "25rem";

  React.useEffect(() => {
    if (active) {
      history.push(Routes.MARKET);
    }
  }, [active, history]);

  return (
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <MotionBox
        border="1px solid"
        borderColor="gray.50"
        background="white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            transform: "translateY(2rem)",
            transitionDuration: "0.3s",
          },
          visible: {
            opacity: 1,
            transform: "translateY(0rem)",
          },
        }}
        width={boxWidth}
        padding="2rem"
        boxShadow="xl"
        borderRadius="0.5rem"
      >
        <Image
          borderRadius="0.5rem"
          height="20rem"
          width="100%"
          src={mockCollectible.imgFile}
          mb="1rem"
        />
        <Text fontSize="4xl">Mint Your Own Blockchain Assets</Text>
        <Text fontSize="xl" mb="2rem">
          Create blockchain assets without coding—for free, using a simple
          visual interface.
        </Text>
        <Flex justifyContent="center">
          <ConnectMetamaskButton />
        </Flex>
      </MotionBox>
    </Flex>
  );
};

export default Home;
// Mint Your Own Blockchain Assets
// Create blockchain assets without coding—for free, using a simple visual interface.
