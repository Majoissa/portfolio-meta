import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderRadius="lg"
      overflow="hidden"
      spacing={4}
      bg="white"
      align="start"
      color="black"
    >
      <Image
        borderRadius="md"
        src={imageSrc}
        alt={`Imagen de ${title}`}
        boxSize="100%"
        objectFit="cover"
      />
      <VStack>
        <Heading size="md" alignSelf="flex-start" paddingLeft={4}>
          {title}
        </Heading>
        <Text fontSize="sm" p={4}>
          {description}
        </Text>
      </VStack>
      <HStack spacing={8} width="100%">
        <Text fontSize="sm" p={4} fontWeight={600}>
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
