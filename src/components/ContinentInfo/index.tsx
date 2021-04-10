import { Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface ContinentInfoProps {
  countries: number;
  languages: number;
  cities: number;
}

export function ContinentInfo({ cities, countries, languages }: ContinentInfoProps): JSX.Element {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {countries}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          countries
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {languages}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          languages
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {cities}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cities +100
          <Tooltip hasArrow label="Most travelled cities">
            <span>
              <Icon
                cursor="pointer"
                as={RiInformationLine}
                ml="1"
                color="gray.400"
                w={["10px", "16px"]}
                h={["10px", "16px"]}
              />
            </span>
          </Tooltip>
        </Text>
      </Flex>
    </Flex>
  );
}
