import { useState, useEffect } from 'react';
import { CardPost } from "@/components/molecules/BlogCard";
//import logger from "@/logger";
import Link from "next/link";
import { Box, Center, Flex, GridItem, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { BlogLayout } from "@/components/templates/BlogLayout";
import ThemeContainer from "@/components/templates/ThemeContainer";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "@/styles/theme";

interface getAllPostsProp {
  page: number;
}

async function getAllPosts(page: getAllPostsProp) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    //logger.error('Ops, alguma coisa correu mal');
    return [];
  }
  //logger.info('Posts obtidos com sucesso');
  return response.json();
}

export default function Blog({ searchParams }) {
  const [posts, setPosts] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const currentPage = searchParams?.page || 1;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, prev, next } = await getAllPosts(currentPage);
      setPosts(data);
      setPrev(prev);
      setNext(next);
    };

    fetchPosts();
  }, [currentPage]);

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

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};