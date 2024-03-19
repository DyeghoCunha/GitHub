import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import React from 'react'

export default function Btn_Hamburger() {
  return (
    <Menu colorScheme='whiteAplha'>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<RxHamburgerMenu />}
        variant='outline'
        color="white"
      />
      <MenuList>
        <MenuItem icon={<RxHamburgerMenu />} command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={<RxHamburgerMenu />} command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={<RxHamburgerMenu />} command='⌘⇧N'>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<RxHamburgerMenu />} command='⌘O'>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
