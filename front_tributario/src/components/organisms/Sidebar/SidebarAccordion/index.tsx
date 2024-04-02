import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Icon, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { MdCalculate } from 'react-icons/md'
import snImg from "@/assets/image/calc.png"
import tkImg from "@/assets/image/truck.png"
import sifImg from "@/assets/image/sif.png"




import { TbBrandBlogger } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
import { GoBroadcast } from "react-icons/go";
import { SlChemistry } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import SidebarLinkDot from '../SidebarLinkDot'
import { AnimatePresence, motion } from 'framer-motion'

type SidebarAccordionLinkType = {
  icon: string,
  href: string;
  children: React.ReactNode
}
type SidebarAccordionLinkDotType = {
  color: string,
  href: string;
  children: React.ReactNode
}

function SidebarAccordionLink({ icon, href, children }: SidebarAccordionLinkType) {

  return (
    <HStack mb="4px" as={Link} href={href} _hover={{ color: "#2E7E17" }}>
      <Image w="40px" h="40px" alt={icon} src={icon} />
      <Text _hover={{ bgGradient: "linear(to-r,#2E7E17, #121C12)", bgClip: "text" }}>{children}</Text>
    </HStack>
  )
}

function SidebarAccordionLinkDot({ color, href, children }: SidebarAccordionLinkDotType) {

  return (
    <HStack mb="4px" as={Link} href={href}>
      <Icon viewBox='0 0 200 200' color={color}>
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>
      <Text _hover={{ bgGradient: "linear(to-r, orange, red)", bgClip: "text", fontWeight: "bold" }}>{children}</Text>
    </HStack>
  )
}

type SidebarAccordionMotionType = {
  isOpen: boolean;
  children: React.ReactNode;
}

const SidebarAccordionMotion = ({ isOpen, children }: SidebarAccordionMotionType) => {


  const MotionBox = motion(Box)

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

type SidebarAccordionType = {
  isOpen: boolean
}

export default function SidebarAccordion({ isOpen }: SidebarAccordionType) {

  const maisConteudo = [
    {
      icon: snImg.src,
      href: "/SimplesNacional",
      text: "Simples Nacional"
    }, {
      icon: tkImg.src,
      href: "/SimplesNacional",
      text: "Calculo de Comunicação de Transporte e Serviço"
    }, {
      icon: sifImg.src,
      href: "/SimplesNacional",
      text: "Locação de Bens Móveis"
    },

  ]

  const categorias = [
    {
      color: '#FF5733', // Laranja
      href: "/Developers",
      text: "Samuca Feed"
    },
    {
      color: '#FFC300', // Amarelo
      href: "/",
      text: "Notícias"
    },
    {
      color: '#FFD700', // Dourado
      href: "/",
      text: "Mural de Empregos"
    },
    {
      color: '#FF1493', // Rosa
      href: "/",
      text: "Artigos da Comunidade"
    },
    {
      color: '#00CED1', // Azul Turquesa
      href: "/",
      text: "Eventos"
    },
    {
      color: '#32CD32', // Verde Lime
      href: "/",
      text: "Linux"
    },
    {
      color: '#8A2BE2', // Azul Violeta
      href: "/",
      text: "Windows"
    },
    {
      color: '#FF4500', // Vermelho Alaranjado
      href: "/",
      text: "Apple"
    },
    {
      color: '#9400D3', // Roxo
      href: "/",
      text: "Outros Sistemas"
    },
    {
      color: '#00FF7F', // Verde Primavera
      href: "/",
      text: "Programação e Desenvolvimento"
    },
    {
      color: '#FF6347', // Tomate
      href: "/",
      text: "Redes, Servidores e Internet"
    },
    {
      color: '#1E90FF', // Azul Dodger
      href: "/",
      text: "Design e Audiovisual"
    },
    {
      color: '#FF69B4', // Rosa Choque
      href: "/",
      text: "FrontEnd"
    },
    {
      color: '#20B2AA', // Verde Mar
      href: "/",
      text: "BackEnd"
    },
    {
      color: '#FF8C00', // Laranja Escuro
      href: "/",
      text: "FullStack"
    },
    {
      color: '#7B68EE', // Azul Médio
      href: "/",
      text: "Mobile"
    },
    {
      color: '#FF00FF', // Magenta
      href: "/",
      text: "Todas as Categorias"
    },
    {
      color: '#228B22', // Verde Floresta
      href: "/",
      text: "Verde Floresta"
    }
  ];


  return (

    <Accordion allowToggle w="100%" >

      <AccordionItem>
        <SidebarAccordionMotion isOpen={isOpen}>
          <h2>
            <AccordionButton>

              <Box as="span" flex='1' fontSize="20px" textAlign='left'>
                Ferramentas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
        </SidebarAccordionMotion>
        <AccordionPanel pb={4}>
          {maisConteudo.map((item, index) => (
            <SidebarAccordionLink key={index} href={item.href} icon={item.icon}>{item.text}</SidebarAccordionLink>
          ))}


        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>

        <AccordionPanel css={{
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '6px',
            background: "rgba(255,0,0,0.1)",
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#fe7700',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#fe7000',
          },
        }} pb={4} maxH="200px" overflowY="auto">

        </AccordionPanel>
      </AccordionItem>



    </Accordion>

  )
}
