import FormProject from "@/components/molecules/FormProject"
import SimplesNacionalForm from "@/components/molecules/SimplesNacionalForm/SimplesNacionalForm"
import { Center, Heading,VStack } from "@chakra-ui/react"

const SimplesNacionalPage = ()=>{
  return(
    <Center mt="100px" w="100vw" h="100vh">


      <VStack>
      <SimplesNacionalForm/> 
      </VStack>
    </Center>
  )
}

export default SimplesNacionalPage