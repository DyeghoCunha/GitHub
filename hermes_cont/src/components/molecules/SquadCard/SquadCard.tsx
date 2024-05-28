import { Box, Card, Heading, Text } from "@chakra-ui/react";


interface ISquadCard {
  name: string,
  text: string
}

export default function SquadCard({ name, text }: ISquadCard) {
  return (
    <Box w={{base:"100%",md:"800px"}} border="2px solid white" borderRadius="40px" position="relative" py={7} px={8}
      _hover={{
        borderColor: "#F1AC19",
        boxShadow: "3px 3px 5px rgba(0,0,0,0.5), inset -3px -3px 5px rgba(0,0,0,0.5), inset 3px 3px 5px rgba(255,255,255,0.4)"
      }}
      role="group"
    >
      <Heading _groupHover={{ outline: "1px solid #F1AC19", boxSizing: "borderBox", boxShadow: " inset -3px -3px 5px rgba(0,0,0,0.5), inset 3px 3px 5px rgba(255,255,255,0.4)" }} borderRadius="10px"
        px={3} py={1} bgColor="hermesBlue.400"
        fontSize={{base:"100%",md:"30px"}} position="absolute"
        top={-6} left={{base:"30px",md:"50px"}}
        color="hermesGold.500">{name}</Heading>
      <Text color="white" fontSize={{base:"12px",md:"20px"}} >
        {text}
      </Text>
    </Box>
  )
}
