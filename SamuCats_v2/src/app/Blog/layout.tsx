"use client"
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import ThemeContainer from "@/components/templates/ThemeContainer";
import { Box, Container } from "@chakra-ui/react";
import { useCycle } from "framer-motion";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <ThemeContainer>
      <Box position="fixed" w="100%" top={0} m={0} p={0} zIndex={100}>
        <Header />
      </Box>
     <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <Container
        maxW="full"
        flexGrow={1}
        px="120.1px"
      >
        {children}
      </Container>
      <Footer />
    </ThemeContainer>
  );
}
