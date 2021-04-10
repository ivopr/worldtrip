import { Box, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "@components/Banner";
import { Categories } from "@components/Categories";
import { Header } from "@components/Header";
import { Slider } from "@components/Slider";
import { GetStaticProps } from "next";
import Head from "next/head";

interface HomeProps {
  continents: {
    description: string;
    id: number;
    image: string;
    name: string;
    cities: number;
  }[];
}

export default function Home({ continents }: HomeProps): JSX.Element {
  return (
    <Flex direction="column" h="full">
      <Head>
        <title>Home | worltrip</title>
      </Head>

      <Header />

      <Banner />
      <Categories />

      <Box w={["60px", "90px"]} mx="auto" h="2.5px" bg="gray.700" my={["9", "20"]} />
      <Heading textAlign="center" fontWeight="500" mb={["5", "14"]} fontSize={["lg", "3xl", "4xl"]}>
        Ready to fly?
        <br />
        Then choose your continent
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await fetch("http://localhost:3001/continents").then((response) =>
    response.json()
  );

  return {
    props: {
      continents
    }
  };
};
