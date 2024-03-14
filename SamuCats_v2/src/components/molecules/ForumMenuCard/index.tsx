import { Card, CardBody, CardHeader, Divider, HStack, Tag, Text } from '@chakra-ui/react'
import React from 'react'

export default function ForumMenuCard() {
  return (
    <Card bgColor="gray.600" maxW="500px" minW="300px" _hover={{bgColor:"gray.500"}}>
      <CardHeader mb={1} pb={0}>
        <HStack>
          <Tag size="md" variant='solid' colorScheme='orange'>
            Artigos da Comunidade
          </Tag>
          <Text>x 1993</Text>
        </HStack>
      </CardHeader>
      <Divider opacity="0.1"/>
      <CardBody mt={2} pt={0}>
        <Text noOfLines={2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus minus. Eos, sequi, explicabo et ratione placeat itaque dolor accusantium optio, labore laudantium iusto atque! Voluptatibus vel explicabo hic aliquam.
        </Text>
      </CardBody>
    </Card>
  )
}
