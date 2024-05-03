'use client';
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'

import CurvedTextFooter from "@/components/atoms/CurvedTextFooter/CurvedTextFooter";
import { Box } from "@chakra-ui/react";

export default function FooterCurved() {

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <Box as="main" zIndex={20} w="100vw">
            <Box  h="100vh"></Box>
            <CurvedTextFooter/>
        </Box>
    );
}