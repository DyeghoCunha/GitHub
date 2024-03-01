import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import { useCycle } from "framer-motion";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export function DefaultLayout({ p, children }: IDefaultLayoutProps) {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <>
      <Box  position="fixed" w="100%" top={0} m={0} p={0}>
      <Header />
      </Box>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
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
