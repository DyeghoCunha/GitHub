"use client"
import Footer from "@/components/organisms/Footer";
import Header from "./Header";
import { Box, Container } from "@chakra-ui/react";
import { useCycle } from "framer-motion";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export function ForumLayout({ p, children }: IDefaultLayoutProps) {
  return (
    <>
      <Box  position="fixed" w="100%" top={0} m={0} p={0} zIndex={100}>
        <Header />
      </Box>
      <Container
        maxW="full"
        m={0}
        p={0}
        flexGrow={1}
        
      >
        {children}
      </Container>
      <Footer/>

    </>
  );
}
