'use client';
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Footer from "@/components/Footer";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <ChakraProvider>
            <main className="">
                <Box h="100vh"></Box>
                <Footer />
            </main>
        </ChakraProvider>
    );
}