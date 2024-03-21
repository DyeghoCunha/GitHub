import DeveloperCard from "@/components/molecules/DeveloperCard"
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Center } from "@chakra-ui/react";

export default function DevelopersCardPage(){
  return ( 
    <Center w="100vw" h="100vh"  >

       <DeveloperCard/> 


    </Center>
  
  )
}



DevelopersCardPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};
