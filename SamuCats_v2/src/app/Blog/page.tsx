
import { CardPost } from "@/components/molecules/BlogCard"
import logger from "@/logger"
import Link from "next/link"
import { Box, Center, Flex, GridItem, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { DefaultLayout } from "@/components/templates/DefaultLayout"
import Header from "@/components/organisms/Header"
import Footer from "@/components/organisms/Footer"
import { BlogLayout } from "@/components/templates/BlogLayout"

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

export default async function Blog({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <Center>
     
      <VStack w="100vw" h="100vh">
        <SimpleGrid gridColumn={2}>
          {posts && posts.map(post => <GridItem key={post.id}> <CardPost post={post} /></GridItem>)}
        </SimpleGrid>

        <Flex>
          {prev && <Link href={`/Blog/?page=${prev}`}>Página anterior</Link>}
          {next && <Link href={`/Blog/?page=${next}`}>Próxima página</Link>}
        </Flex>
      </VStack>
    </Center>
  )
}
// App/Blog.tsx
// ... existing code

//Blog.getLayout =function getLayout(page) {
//return <BlogLayout>{page}</BlogLayout>;
//};
