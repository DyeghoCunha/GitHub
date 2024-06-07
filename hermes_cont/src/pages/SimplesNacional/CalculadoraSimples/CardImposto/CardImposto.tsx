import { Box, HStack, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

interface ICardImposto {
  name: string,
  percent: string,
  value: string
}


export default function CardImposto({ name, percent, value }: ICardImposto) {
  return (
    <Box
      color="white"
      border="3px solid gray"
      p={2}
      borderRadius="8px"
      position="relative"
      _hover={{ border: "3px solid white" }}
      role='group'  >

      <Text
        position="absolute"
        top={-4}
        bgColor="hermesBlue.400"
        color="white" border="3px solid gray"
        _groupHover={{ border: "3px solid white" }}
        borderRadius="8px" px={2} fontWeight="500"
        fontSize="18px"
      >
        {name}
      </Text>
      
      <HStack mt={4} justify="space-around">

        <Tooltip label="% do imposto referente à áliquota" hasArrow>
          <Box py={2} px={2} w="75px" textAlign="end" border="1px solid white" borderRadius="8px">{percent}</Box>
        </Tooltip>
        <Tooltip label="Valor do Imposto Correspondente à áliquota" hasArrow >
          <Box py={2} px={2} textAlign="end" border="1px solid white" borderRadius="8px">{value}</Box>
        </Tooltip>
      </HStack>
    </Box>
  )
}
