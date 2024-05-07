"use client"
import styles from './flipCard3d.module.css';
import { RiTwitterXLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, HStack, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import BgCardLight from "@/assets/image/DeveloperCardBackGroundLight3.gif"
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";

interface IFlipCard3d {
  front: any;
  back: any;
}

export default function FlipCard3d({ front, back }: IFlipCard3d) {

  const [isFlip, setIsFlip] = useState(false)

  return (
    <Box className={styles.container} >
      <Box className={styles["card-inner"]}
        transform={isFlip ? "rotateY(180deg)" : "rotateY(0deg)"}
      >
        <Box className={styles["card-front"]} onMouseEnter={() => setIsFlip(!isFlip)}
        >
          {front}
        </Box>
        <Box className={styles["card-back"]} cursor="pointer" onMouseLeave={() => setIsFlip(!isFlip)} onClick={() => setIsFlip(!isFlip)}
          position="absolute"
          top={0}
          left={0}
        >
          {back}
        </Box>
      </Box>
    </Box>


  );
}
