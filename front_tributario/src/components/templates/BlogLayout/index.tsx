import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import { Box, Container } from "@chakra-ui/react";
import { useCycle } from "framer-motion";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export function BlogLayout({ p, children }: IDefaultLayoutProps) {
  return (
    <>
      <Box position="fixed" w="100%" top={0} m={0} p={0} zIndex={100}>
        <Header />
      </Box>
      <Container
        maxW="full"
        flexGrow={1}
        px={{ base: 0, lg: p === undefined ? 120.1 : p }}
      >
        {children}
      </Container>

      <Footer />
    </>
  );
}
