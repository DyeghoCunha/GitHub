import Btn_Hamburger from '@/components/atoms/Btn_Hamburger'
import { Box } from '@chakra-ui/react'
import React from 'react'
import DrawerDefault from '../../Drawer'

export default function HeaderHamburger() {
  return (
    <Box mb="10px">
     {/* <Btn_Hamburger/>*/}
      <DrawerDefault/>
    </Box>
  )
}
