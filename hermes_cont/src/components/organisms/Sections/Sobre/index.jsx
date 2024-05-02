'use client'
import styles from './page.module.scss'
import ZoomParallax from '@/components/molecules/ZoomParallax';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Center, VStack } from '@chakra-ui/react';
import SecondSection from '@/components/organisms/Sections/SecondSection/SecondSection';

export default function Sobre() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (

        <main className={styles.main}>

           
            <ZoomParallax />
          

        </main>


    )
}
