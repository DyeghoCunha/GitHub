import logger from "@/logger"
import Link from "next/link"
import { Center, Flex, GridItem, SimpleGrid, VStack } from "@chakra-ui/react"
import { CardPost } from "@/components/molecules/BlogCard"
import { DefaultLayout } from "@/components/templates/DefaultLayout"

interface getAllPostsProp {
  page: number
}


async function getAllPosts(page: getAllPostsProp) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return []
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}

export default async function Blog({searchParams}) {
  const currentPage = searchParams?.page ||1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <Center mt="70px" zIndex={0}>
    <VStack w="100vw" >
      <SimpleGrid columns={3} gap={5}>
        {posts && posts.map(post => <GridItem key={post.id}> <CardPost post={post} /></GridItem>)}
      </SimpleGrid>
      <Flex>
        {prev && <Link href={`/Blog/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/Blog/?page=${next}`}>Próxima página</Link>}
      </Flex>
    </VStack>
  </Center>
  
  );
}

