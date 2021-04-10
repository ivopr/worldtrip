import { Flex, Grid, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header(): JSX.Element {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start">
        {notHomePage && (
          <Link href="/">
            <ChakraLink
              _hover={{
                bg: "blackAlpha.300",
                borderRadius: "1rem"
              }}
              w="fit-content">
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </ChakraLink>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/assets/logo.svg"
          alt="Um avição voando sobre o nome da marca world trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
