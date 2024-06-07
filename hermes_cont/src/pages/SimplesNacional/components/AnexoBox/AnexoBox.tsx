import { retornaAnexo } from '@/utils/cnae';
import { Box, HStack, Text, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'

interface IAnexoBox {
  cnae: string,
  descricao: string,
  isPrincipal: boolean,
}

export default function AnexoBox({ cnae, descricao, isPrincipal }: IAnexoBox) {

  const anexo: string = retornaAnexo(cnae)

  return (
    <Tooltip
      label={anexo === "Não Optante" ? `" Este CNAE não pode ser Opetante pelo Simples Nacional ":  ${descricao}`: descricao}
      placement="right"
      hasArrow
    >
      <Box w="100%" >
        <Box border="3px solid gray" _hover={{ border: "3px solid white" }} role='group' position="relative" borderRadius="8px">
          <VStack p={2} >
            <HStack justify="space-between" w="100%">
              <HStack >
                <Text color="gray" fontSize={22}>CNAE:
                </Text>
                <Text fontSize={22} color="white">{cnae}</Text>
              </HStack>
              <Box>

                <Box border={anexo === "Não Optante" ? "1px solid red" : "1px solid gray"} p={2} bgColor={anexo === "Não Optante" ? "rgba(255,0,0,0.2)" : "hermesBlue.400"} borderRadius="8px"
                  _groupHover={{ outline: anexo==="Não Optante"?"1px solid rgba(255,0,0,0.2)":"none", bgColor: anexo==="Não Optante"?"red":"white", color:anexo==="Não Optante"?" rgba(0,0,0,0.6)": "hermesBlue.400", boxShadow: "inset 2px 2px 4px rgba(0,0,0,1),inset -2px -2px 4px rgba(0,0,0,1)" }}>
                  <Text>{anexo}</Text>
                </Box>

              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Tooltip>
  )
}
