import { Button } from '@chakra-ui/react'
import React from 'react'

interface Btn_LogginProps {
  onClick: () => void;
}

const Btn_Loggin: React.FC<Btn_LogginProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} bgGradient="linear(to-r, orange, red)" colorScheme='whiteAlpha' fontSize="20px" fontWeight="bold" color="white">Entre</Button>
  )
}

export default Btn_Loggin;
