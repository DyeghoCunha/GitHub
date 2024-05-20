'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import { Box, Image } from '@chakra-ui/react';
import bgimg from "@/assets/image/logo.png"

const words = ["Olá", "Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]
const MotionImage = motion(Image);
const MotionDiv = motion(Box)


export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
         <MotionDiv zIndex={2000} 
         variants={slideUp}  
         bgColor="hermesBlue.400" 
         bgImage={bgimg.src} 
         bgPosition="center"
         bgRepeat="no-repeat"
         initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <>
                    <svg>
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{stopColor:"rgb(40, 40, 60)", stopOpacity:0}} />
                                <stop offset="90%" style={{stopColor:"rgb(40, 40, 60)", stopOpacity:1}} />
                                <stop offset="200%" style={{stopColor:"rgb(40, 40, 60)", stopOpacity:1}} />
                            </linearGradient>
                        </defs>
                        <motion.path fill="url(#grad1)" variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </MotionDiv>
    )
}
