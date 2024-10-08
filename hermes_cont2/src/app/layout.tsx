"use client"
import Header from "@/components/organisms/Header";
import { Box, Container } from "@chakra-ui/react";
import { useCycle } from "framer-motion";

interface IDefaultLayoutProps {
  p?: number;
  children: React.ReactNode;
}

export function DefaultLayout({ p, children }: IDefaultLayoutProps) {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <>
      <Box position="fixed" w="100%" top={0} m={0} p={0} zIndex={100}>
        <Header />
      </Box>
      <Container
        maxW="full"
        flexGrow={1}
      >
        {children}
      </Container>

    </>
  );
}
