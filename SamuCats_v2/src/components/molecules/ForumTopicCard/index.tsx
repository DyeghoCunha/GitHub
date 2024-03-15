import { Avatar, Box, Checkbox, Flex, HStack, Heading, Tag, Text, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiPinOutline } from "react-icons/ti";

interface ForumTopicCardProps {
  title: string;
  category: string[];
  avatar: any[]
  answersCount: string;
  views: string;
  date: string;
  pin: any;
}


export default function ForumTopicCard({ title, category, avatar, answersCount, views, date, pin }: ForumTopicCardProps) {
  return (
    <Box maxH="200px" w="100%" borderBottom="1px solid gray" p={2} mb={3}>
      <HStack p={0} m={0} w="100%" h="100%">
        <VStack w="50%" alignItems="start">
          <HStack>
            <Flex justify="center" align="center" mx={1}>{pin === "pin" ? (<TiPinOutline size="20px" />) : <Checkbox />}</Flex>
            <Heading as="h2" fontSize="lg">{title}</Heading>
          </HStack>
          <HStack>
            {category && category.map((item, index) => (
              <Tag colorScheme="blue" key={index}>{item}</Tag>
            ))}
          </HStack>
        </VStack>
        <HStack ml={5} w="100%" maxH="200px" >
          <HStack>
            {avatar && avatar.map((item, index) => (
              <Avatar size="sm" key={index} src={item} />
            ))}
          </HStack>
          <Flex justify="center" align="center" width="100px" ml={5} p={0} >
            <Tooltip hasArrow label='Número de Respostas' bg='gray.500' placement='top' color="black">
              <Text >{answersCount}</Text>
            </Tooltip>
          </Flex>
          <Flex justify="center" align="center" width="100px" ml={5} p={0} >

            <Tooltip hasArrow label="Contagem de Visualizações" bg='gray.500' placement='top' color="black">
            <Text >{views}</Text>
            </Tooltip>
          </Flex>
          <Flex justify="center" align="center" width="100px" ml={5} p={0} >
            <Tooltip hasArrow label='Data de Postagem' bg='gray.500' placement='top' color="black">
            <Text >{date}</Text>
            </Tooltip>
          </Flex>
        </HStack>
      </HStack>
    </Box>
  )
}
