import ForumMenuCard from '@/components/molecules/ForumMenuCard'
import ForumMenuDropDown from '@/components/molecules/ForumMenuDropDown'
import { Button, HStack, MenuItem, Tag } from '@chakra-ui/react'
import React from 'react'

export default function ForumHeader() {
  return (
    <HStack>
      <ForumMenuDropDown title='Navegue por Categorias'>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
        <MenuItem><ForumMenuCard /></MenuItem>
      </ForumMenuDropDown>
      <ForumMenuDropDown title='Navegue por Tags'>
        <MenuItem ><Tag colorScheme='orange'>Teste</Tag></MenuItem>
        <MenuItem><Tag colorScheme='teal'>Teste</Tag></MenuItem>
        <MenuItem><Tag colorScheme='red'>Teste</Tag></MenuItem>
        <MenuItem><Tag colorScheme='purple'>Teste</Tag></MenuItem>
      </ForumMenuDropDown>
      <Button variant="primary"> Recentes </Button>
      <Button variant="secondary"> Melhores </Button>
    </HStack>
  )
}
