import FormProject from "@/components/molecules/FormProject"
import { Center, Heading,VStack } from "@chakra-ui/react"

const SimplesNacionalPage = ()=>{
  return(
    <Center w="100vw" h="100vh">


      <VStack>
      <Heading>
        Simples Nacional
      </Heading>
       <FormProject/>
      </VStack>
    </Center>
  )
}

export default SimplesNacionalPage