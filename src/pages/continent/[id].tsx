import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { ContinentCities } from "@components/ContinentCities";
import { ContinentInfo } from "@components/ContinentInfo";
import { Header } from "@components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface ContinentProps {
  continent: {
    cities: number;
    countries: number;
    description_long: string;
    languages: number;
    name: string;
    image: string;
    cities_100: {
      name: string;
      country: string;
      countryCode: string;
      image: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <Flex direction="column">
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>
      <Header />

      <Flex
        align="center"
        bgImage={`url('${continent.image}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={["150px", "300px"]}
        justify={["center", "center", "flex-start"]}
        w="100%">
        <Flex
          bg="blackAlpha.500"
          h={["150px", "300px"]}
          pt={["8", "8", "48"]}
          px={["4", "4", "20"]}
          w="100%">
          <Heading
            color="gray.100"
            fontSize={["1.75rem", "5xl"]}
            fontWeight="500"
            textAlign={["center", "left"]}>
            {continent.name}
          </Heading>
        </Flex>
      </Flex>

      <Flex direction="column" maxW="1160px" mb="10" mx="auto" px="1rem">
        <Grid
          gap={[5, 10, 16, 20]}
          my={["8", "20"]}
          templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}>
          <Text color="gray.700" fontSize={["lg", "xl", "xl", "2xl"]} textAlign="justify">
            {continent.description_long}
          </Text>
          <ContinentInfo
            cities={continent.cities}
            countries={continent.countries}
            languages={continent.languages}
          />
        </Grid>

        <ContinentCities cities={continent.cities_100} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const continent = await fetch(`http://localhost:3001/continents/${id}`).then((response) =>
    response.json()
  );

  return {
    props: {
      continent
    }
  };
};
