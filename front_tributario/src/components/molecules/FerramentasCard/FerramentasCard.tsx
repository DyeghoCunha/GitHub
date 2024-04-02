import FlipCard3d from "@/components/atoms/flipCard3d/FlipCard3d"
import { Card, CardBody, CardFooter, Center, Image, Text } from "@chakra-ui/react"


interface IFerramentasCard{
image:string;
text:string;
}



const FerramentasCard = ({image, text}:IFerramentasCard)=>{
  return(
    <Center >
      <FlipCard3d
        front={<Card bgGradient="linear(to-r,#84D571, #296B18)" w="200px" h="200px" justifyContent="center" alignItems="center">
          <CardBody w="100%" h="70%" m={0} p={0}>
            <Image m={0} p={0} src={image} alt="img" />
          </CardBody>
          <CardFooter w="100%"
            p={0}
            h="30%"
            backdropFilter="blur(1px)"
            bgGradient="linear(to-r,rgba(132, 213, 113, 0.5), #296B18)"
            borderRadius="0px 0px 10px 10px"
            justifyContent="center" alignItems="center">
            <Text textAlign="center" color="gray.100" fontWeight="bold" w="100%" >{text}</Text>
          </CardFooter>
        </Card>}
        back={
          <Card w="200px" h="200px" p={0} bgGradient="linear(to-r, #296B18,#84D571)" justifyContent="center" alignItems="center">
            <Center>
              <Text textAlign="center" fontSize="20px" color="gray.100" fontWeight="bold" w="100%" h="100%">
                {text}
              </Text></Center>
          </Card>}
      >
      </FlipCard3d>
    </Center>
  )
}

export default FerramentasCard