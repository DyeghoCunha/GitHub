import ZoomParallax from '@/components/molecules/ZoomParallax';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Box, Center } from '@chakra-ui/react';

export default function ParallaxSection() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <Center as='main'
            mt="100vh"
            mb="200vh"

        >
            <ZoomParallax />
        </Center>
    )
}
