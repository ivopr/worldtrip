import { Flex, GridItem, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ItemProps {
  icon: string;
  label: string;
}

export function Item({ icon, label }: ItemProps): JSX.Element {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <GridItem>
      <Flex align="center" direction={["row", "column"]} justify="center">
        {isMobile ? (
          <Image h="85px" mb="6" src={`/assets/icons/${icon}.svg`} w="85px" />
        ) : (
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
        )}
        <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
          {label}
        </Text>
      </Flex>
    </GridItem>
  );
}
