
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { remark } from "remark";
import html from "remark-html";
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { Box, Center, Heading, HStack, VStack } from '@chakra-ui/react';


async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
   
    return {};
  }
 
  const data = await response.json();
  if (data.length == 0) {
    return {};
  }

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;
  return post;
}

const PagePost = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const post = await getPostBySlug(slug);
        setPost(post);
      };

      fetchPost();
    }
  }, [slug]);

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

PagePost.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};