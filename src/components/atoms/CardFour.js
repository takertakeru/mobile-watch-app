import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function CardOne() {
  const property = {
    imageUrl: process.env.PUBLIC_URL + "/amazfit-watch.png",
    imageAlt: "Amazfit Bip U",
    title: "Amazfit Bip U",
    formattedPrice: "$199",
  };

  return (
    <Box
      w="120%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="#fff"
      boxShadow="1px 1px 5px"
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        width="100%"
        height="100%"
        p="10px"
      />
      <Box p="6">
        <Box
          fontWeight="600"
          lineHeight="19px"
          fontSize="18px"
          color="#1B153D"
          letterSpacing="-0.24px"
          marginBottom={"8px"}
        >
          {property.title}
        </Box>
        <Box>
          <Box
            as="span"
            color="#9095A6"
            fontSize="12px"
            fontWeight="500"
            lineHeight="14px"
            marginBottom="20px"
          >
            Pro Series
          </Box>
          <Box
            color="#5B41FF"
            fontSize="20px"
            lineHeight="19px"
            fontWeight="500"
            letterSpacing="-0.24px"
          >
            {property.formattedPrice}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
