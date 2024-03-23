import FormProject from "@/components/molecules/FormProject";
import ImagePicker from "@/components/molecules/ImagePicker";
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { getProject, getProjects } from "@/lib/projects";
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";



async function Projects() {
  console.log('Fetching meals');
  const projects:any = await getProjects();

  return (
    <>
      {projects.map((project) => (
        <Card w="300px" h="450px"  m={10} bgColor="gray.700" key={project.id}>
          <CardHeader w="100%" h="20%">
            <Image src={project.image.src} width={300} height={100} alt={project.title} />
          </CardHeader>
          <CardBody zIndex={2}>
            <VStack>
              <Heading>{project.title}</Heading>
              <Text>{project.creator}</Text>
            </VStack>
          </CardBody>
          <CardFooter zIndex={2}>
            <Text>{project.summary}</Text>
          </CardFooter>
        </Card>
      ))}
      </>
  );
}


export default function ProjectsPage() {
  return (
    <main>
      <Box mt={100}></Box>
      <Suspense fallback={<Text>Procurando Projetos</Text>}>
        <Center>
        <Projects/>
        </Center>
      </Suspense>
      <Link href="/Projects/ProjectsForm">Formulário</Link>
    </main>
  )
}
