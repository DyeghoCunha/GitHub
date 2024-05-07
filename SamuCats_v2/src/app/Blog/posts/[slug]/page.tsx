import logger from "@/logger"
import { Box, Center, Heading, VStack } from "@chakra-ui/react"
import { remark } from "remark"
import html from "remark-html"

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`
  const response = await fetch(url)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal com o slug')
    return {}
  }
  logger.info('Posts obtidos com sucesso')
  const data = await response.json()
  if (data.length == 0) {
    return {}
  }


  const post = data[0]

  const processedContent = await remark().use(html).process(post.postTest);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml
  return post
}



const PagePost = async ({ params }) => {

  const slug = params.slug
  const post = await getPostBySlug(slug)
  return (
    <Center mt="70px">
      <VStack>
      <Heading>{post.title}</Heading>
      <Box style={{padding:16 , background:"white"}} dangerouslySetInnerHTML={{__html:post.markdown}}></Box>
      </VStack>
    </Center>
  );
};

export default PagePost;

