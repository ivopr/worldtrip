import { SimpleGrid } from "@chakra-ui/react";

import { Item } from "./Item";

export function Categories(): JSX.Element {
  return (
    <SimpleGrid
      align="center"
      flexWrap="wrap"
      justify="space-between"
      maxW="1160px"
      mt={["10", "32"]}
      mx="auto"
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%">
      <Item icon="cocktail" label="night life" />
      <Item icon="surf" label="beach" />
      <Item icon="building" label="modern" />
      <Item icon="museum" label="classical" />
      <Item icon="earth" label="and more..." />
    </SimpleGrid>
  );
}
