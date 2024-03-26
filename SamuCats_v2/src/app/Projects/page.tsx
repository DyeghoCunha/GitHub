import { AvatarCard } from "@/components/atoms/BlogAvatar/AvatarCard";
import FlipCard3d from "@/components/atoms/flipCard3d/FlipCard3d";
import FormProject from "@/components/molecules/FormProject";
import ImagePicker from "@/components/molecules/ImagePicker";
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { getProject, getProjects } from "@/lib/projects";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
//import Image from "next/image";

import Link from "next/link";
import { Suspense } from "react";

const _creator = [{
  "id": 101,
  "name": "Ana Beatriz",
  "username": "anabeatriz_dev",
  "avatar": [
    "https://randomuser.me/api/portraits/women/23.jpg"
  ]
}
]



async function Projects() {
  console.log('Fetching Projects');
  const projects: any = await getProjects();

  const _cardContainer = ({ children }: any) => {
    return <Card w="300px" bgColor="gray.700" m={10} h="250px">{children}</Card>
  }


  return (
    <>
      {projects.map((project) => (
        <FlipCard3d key={project.id} front={
          <_cardContainer>
            <CardHeader p={0}  position="relative" mb="35px">
              <Heading w="100%" backdropFilter="Blur(5px)" bgColor="rgba(255,0,0,0.7)" borderRadius="10px 10px 0px 0px" justifyContent="center" alignItems="center"  position="absolute" pl="5px" pb="10px" zIndex={5} fontSize="30px">{project.title}</Heading>
            </CardHeader>
            <CardBody  w="100%"  p={0} m={0}>
              <Image borderRadius="10px 10px 0px 0px" src={`https://samucatsv2.s3.amazonaws.com/${project.image}`} alt={project.title} />
            </CardBody>
            <CardFooter w="100%"  justifyContent="end" h="50px"  pb={4} backdropFilter="Blur(5px)" bgColor="rgba(255,0,0,0.7)" borderRadius="0px 0px 10px 10px" >
              <AvatarCard name={_creator[0].name} imageSrc={_creator[0].avatar} userName={_creator[0].username} />
            </CardFooter>
          </_cardContainer>
        } back={

          <_cardContainer>
            <CardBody p={2}  m={0}> 
              <Text  noOfLines={6}>{project.summary}</Text>
            </CardBody>
            <CardFooter p={1} m={0}>
              <VStack w="100%"  justifyContent="end"  alignItems="end">
                <Button variant="primary">
                  Ver Projeto
                </Button>
              </VStack>
            </CardFooter>
          </_cardContainer>
        }>
        </FlipCard3d>

      ))}
    </>
  );
}


export default function ProjectsPage() {
  return (
    <main>
    <Box h="100vh"  mt={0}>
      <Suspense fallback={<Text>Procurando Projetos</Text>}>
        <Center>
          <Projects />
        </Center>
      </Suspense>
      <Box>

      </Box>
      <Link href="/Projects/ProjectsForm">Formulário</Link>
    </Box>
    </main>
  )
}
