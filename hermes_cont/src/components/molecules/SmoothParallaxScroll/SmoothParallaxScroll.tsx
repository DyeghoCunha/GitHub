
'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './SmoothParallaxScroll.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import { Box, Card, Center, VStack } from '@chakra-ui/react';

const images = [
  "1b.jpeg",
  "2b.jpeg",
  "3b.jpeg",
  "4b.jpeg",
  "5b.jpeg",

  "1d.jpeg",
  "2d.jpeg",
  "3d.jpeg",
  "4d.jpeg",
  "5d.jpeg",

  "1e.jpeg",
  "2e.jpeg",
  "3e.jpeg",
  "4e.jpeg",
  "6e.jpeg",

  "1f.jpeg",
  "2f.jpeg",
  "3f.jpeg",
  "4f.jpeg",
  "5f.jpeg",

  "2c.jpeg",
  "3c.jpeg",
  "4c.jpeg",
  "5e.jpeg",
  "6f.jpeg",
  "1c.jpeg",
   


]

export default function SmoothParallaxScroll() {

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.9])

  useEffect(() => {

    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2], images[3], images[4], images[25]]} y={y} />
        <Column images={[images[5], images[6], images[7], images[8], images[9], images[20], images[21], images[22]]} y={y2} />
        <Column images={[images[10], images[11], images[12], images[13],images[23], images[14]]} y={y3} />
        <Column images={[images[16], images[17], images[18], images[19], images[24]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

const Column = ({ images, y }) => {
  return (

    <motion.div
      className={styles.column}
      style={{ y }}
    >
      {
        images.map((src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>

  )
}
