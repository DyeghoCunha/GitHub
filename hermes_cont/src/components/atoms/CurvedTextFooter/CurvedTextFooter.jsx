import React, { useEffect, useRef } from "react";
import { useScroll} from 'framer-motion';
import { Box } from "@chakra-ui/react";

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
                path.setAttribute("startOffset", -100 + (i * 75) + (e * 100) + "%");
            })
        })
    }, [])

    return (
        <Box ref={container}>
            <svg style={{width:"100%", marginBottom:"0", }} viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text  style={{fill: "#f7d526", fontSize:"10.5px",fontWeight:"bold"}}>
                    {
                        [...Array(5)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">
                                Relaxe Enquanto Nós Fazemos as Contas.</textPath>
                        })
                    }
                </text>
            </svg>
        </Box>
    )
}
