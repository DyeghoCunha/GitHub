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
  isFlipProp:any
}

export default function FlipCard3dClick({ front, back,isFlipProp }: IFlipCard3d) {

  

  return (
    <Box className={styles.container} zIndex={1000} >
      <Box className={styles["card-inner"]}
        transform={isFlipProp ? "rotateY(180deg)" : "rotateY(0deg)"}
      >
        <Box className={styles["card-front"]} 
        >
          {front}
        </Box>
        <Box className={styles["card-back"]} cursor="pointer"
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
