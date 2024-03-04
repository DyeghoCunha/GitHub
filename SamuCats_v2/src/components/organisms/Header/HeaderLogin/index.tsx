
import Btn_Loggin from '@/components/atoms/Btn_Loggin'
import { Flex } from '@chakra-ui/react'
import React from 'react'

type HeaderLoginType = {
  isOpen: boolean;
  onOpen: () => void;

}


export default function HeaderLogin({onOpen,isOpen}:HeaderLoginType) {
  return (
    <Flex mb="0px">

      <Btn_Loggin onClick={onOpen}  />
    </Flex>
  )
}
