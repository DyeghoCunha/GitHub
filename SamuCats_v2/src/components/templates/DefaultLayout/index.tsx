import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { Container, Flex } from "@chakra-ui/react";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export function DefaultLayout({ p, children }: IDefaultLayoutProps) {
  return (
    <Flex minH="100vh" direction="column">
<Header/>
      <Container
        maxW="full"
        flexGrow={1}
        px={{ base: 0, lg: p === undefined ? 120.1 : p }}
      >
        {children}
      </Container>

     <Footer/> 
    </Flex>
  );
}