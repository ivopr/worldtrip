import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  continents: {
    description: string;
    id: number;
    image: string;
    name: string;
    cities: number;
  }[];
}

export function Slider({ continents }: SliderProps): JSX.Element {
  return (
    <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
      <Swiper
        autoplay={{
          delay: 4000
        }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        style={{ width: "100%", flex: "1" }}>
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              _hover={{
                zoom: 1.05
              }}
              align="center"
              bgImage={`url('${continent.image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              direction="column"
              h="100%"
              justify="center"
              textAlign="center"
              w="100%">
              <Link href={`/continent/${continent.id}`} passHref>
                <Flex
                  as="a"
                  align="center"
                  bg="blackAlpha.500"
                  direction="column"
                  h="100%"
                  justify="center"
                  w="100%">
                  <Heading color="gray.100" fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold">
                    {continent.name}
                  </Heading>
                  <Text
                    color="gray.300"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    fontWeight="bold"
                    mt={["2", "4"]}>
                    {continent.description}
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
