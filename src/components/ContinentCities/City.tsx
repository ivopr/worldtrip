import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CityProps {
  name: string;
  country: string;
  countryCode: string;
  image: string;
}

export function City({ country, countryCode, image, name }: CityProps): JSX.Element {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={image} alt={`${name}, ${country}`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <ReactCountryFlag
          style={{
            fontSize: "30px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 4px 0 #FFBA0840"
          }}
          aria-label={country}
          countryCode={countryCode}
          svg
        />
      </Flex>
    </Box>
  );
}
