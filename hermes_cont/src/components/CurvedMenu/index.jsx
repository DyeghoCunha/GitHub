'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Box, Flex } from '@chakra-ui/react';

export default function CurvedMenu() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={styles.main}>

      <Box
      top={0}
      position="fixed"
      right={0}
      zIndex={1}
     >
        <Flex 
        width="40px"
        h="40px"
        borderRadius="50%"
        bgColor="transparent"
        cursor="pointer"
        align="center"
        justify="center"
        onClick={() => {setIsActive(!isActive)}} 
        >
          <Box 
          
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></Box>
        </Flex>
      </Box>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
