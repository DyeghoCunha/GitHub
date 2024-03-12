import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react'
import Logo from "@/assets/image/logo.jpeg"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"

const MotionIcon = motion(ChevronRightIcon)

export default function Btn_LogoSidebar({ isOpen, toggleOpen }: any) {
  return (
    <Box w="318px" bgColor="rgba(255,0,0,0.4)" borderBottom="4px solid orange" display="flex"  position="relative" p="3.5px 25px 3.5px 5px" m={0}>
      <HStack justifyContent="center" alignItems="center"  >
        <Avatar size="md" src={Logo.src} />
        <Text fontSize="30px" fontWeight="bold">Dyegho Cunha</Text>
        <Button onClick={()=>toggleOpen()}  w="20px" h="40px" variant="primary" borderRadius="full" position="absolute" right="-5">
          <MotionIcon boxSize="10" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4 }}/>
        </Button>
      </HStack>
    </Box>
  )
}
