import { Grid, Heading } from "@chakra-ui/react";

import { City } from "./City";

interface ContinentCitiesProps {
  cities: {
    name: string;
    country: string;
    countryCode: string;
    image: string;
  }[];
}
export function ContinentCities({ cities }: ContinentCitiesProps): JSX.Element {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cities +100
      </Heading>
      <Grid
        alignItems="center"
        gap={["20px", "45px"]}
        justifyContent="center"
        px={["30px", "0"]}
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
        {cities.map((city) => (
          <City
            key={city.name}
            name={city.name}
            country={city.country}
            countryCode={city.countryCode}
            image={city.image}
          />
        ))}
      </Grid>
    </>
  );
}
