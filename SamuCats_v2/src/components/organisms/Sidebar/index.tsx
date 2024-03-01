// Importando os componentes necessários
import Btn_LogoSidebar from '@/components/atoms/Btn_LogoSidebar'
import { Box, Button, Flex, HStack, Stack, useColorMode } from '@chakra-ui/react'
import { motion, useCycle } from 'framer-motion'

// Criando um componente de MotionBox que aceita as props do Framer Motion
const MotionBox = motion(Box)
const MotionButton = motion(Button)

// Definindo as variantes de animação da sidebar
const sidebarVariants = {
  open: {
    width: '317.5px',
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
  closed: {
    width: '55px',
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
}

// Definindo as variantes de animação do botão
const buttonVariants = {
  open: {
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
  closed: {
    x: -175,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
}

// Criando um componente de Sidebar
const Sidebar = ({ isOpen, toggleOpen }: any) => {
  // Usando o hook useCycle para alternar entre os estados de aberto e fechado

  // Usando o hook useColorMode para obter o colorMode atual
  const { colorMode } = useColorMode()

  // Definindo as cores da sidebar de acordo com o colorMode
  const bgColor = { light: 'gray.100', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }



  return (
    
    <>
    
    <HStack justifyContent="start" alignItems="start" >
      <Box position="fixed" zIndex="20" top="0" left="0">
        <Btn_LogoSidebar/>
      </Box>
      <MotionBox
        as="aside"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        position="fixed"
        top="60px"
        left={0}
        height="100vh"
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}

      >
        <Flex
          as="nav"
          direction="column"
          align="center"
          justify="space-between"
          height="100%"
          padding={4}
        >
          {/* Aqui você pode adicionar os itens do seu menu */}
          <Box>Logo</Box>
          <Box>Menu</Box>
          <Box>Perfil</Box>
        </Flex>
        <MotionButton
          as={Button}
          position="absolute"
          top={4}
          right={-4}
          borderRadius="full"
          onClick={() => toggleOpen()}
          variant={buttonVariants}
        >
          {isOpen ? 'Fechar' : 'Abrir'}
        </MotionButton>
      </MotionBox>
    </HStack>
    </>
  )
}

export default Sidebar
