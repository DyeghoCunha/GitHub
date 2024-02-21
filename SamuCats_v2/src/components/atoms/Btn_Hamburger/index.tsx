import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Btn_Hamburger() {
  return (
    <Menu colorScheme='whiteAplha'>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        color="white"
      />
      <MenuList>
        <MenuItem icon={<AddIcon />} command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command='⌘O'>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
