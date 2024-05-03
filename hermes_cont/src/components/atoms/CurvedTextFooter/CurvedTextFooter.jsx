import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import { Box, Text, Image, VStack } from "@chakra-ui/react";


const MotionBox = motion(Box)

export default function CurvedTextFooter() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    return (
        <Box ref={container} zIndex={30}>
            <svg width="100%" marginBottom="10" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <Text fontSize="5px" textTransform="uppercase" style={{fill: "red"}}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Relaxe Enquanto Nós Fazemos as Contas</textPath>
                        })
                    }
                </Text>
            </svg>
        </Box>
    )
}


