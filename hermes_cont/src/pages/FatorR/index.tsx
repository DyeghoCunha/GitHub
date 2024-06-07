"use client"
import GradientText from '@/components/atoms/GradientText/GradientText'
import { calculaFatorR } from '@/utils/fatorR'
import { Box, Button, Center, Heading, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'
import CalculaFatorR from './components/CalculaFatorR/CalculaFatorR'
import { DefaultLayout } from '@/components/templates/DefaultLayout'
import PageContainer from '@/components/atoms/PageContainer/PageContainer'
import { ForumLayout } from '@/components/templates/ForumLayout'

export default function FatorR() {
  return (

    <Center w="100vw" h="100%" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" >
      <VStack align="center" justify="start" h="100%" w="100%"mt="80px">
        <VStack w="50vw" h="100%" >
          <VStack >
            <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
              O que é o Fator R ?
            </Heading>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">O cálculo do fator R é um método empregado para identificar o Anexo do Simples Nacional ao qual uma empresa pertence. Dependendo do resultado obtido, negócios que originalmente se encaixam no Anexo V podem ser reclassificados para o Anexo III. Isso pode resultar em uma diminuição da carga tributária, contribuindo para a redução dos custos mensais da empresa.</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">A nova metodologia para determinar a tributação de uma empresa emergiu após a revisão da Lei Complementar nº 123/2006, que estabelece os benefícios concedidos às microempresas e empresas de pequeno porte, incluindo a determinação e o pagamento de impostos municipais, estaduais e federais.

              Essas alterações foram implementadas por meio de outra Lei Complementar, a nº 155/2016, cujo propósito é reestruturar e simplificar a determinação dos impostos para as empresas que optam pelo Simples Nacional.

              Uma das alterações mais notáveis da nova lei complementar é a eliminação do Anexo VI. Como resultado, as atividades econômicas que anteriormente se enquadravam nesse anexo foram transferidas para o Anexo V.

              Contudo, dependendo do montante da folha de pagamento em relação ao faturamento anual, algumas atividades podem ser classificadas no Anexo III e, assim, pagar menos impostos, uma vez que este anexo possui alíquotas inferiores.</Text>
            <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
              Como calcular o Fator R do Simples Nacional ?
            </Heading>

            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">Agora que temos uma compreensão mais aprofundada do Simples Nacional e seus anexos, podemos prosseguir para o cálculo do Fator R e, assim, descobrir como reduzir a carga tributária.</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">Inicialmente, é necessário conhecer o valor total da folha de pagamento da sua empresa e a receita bruta, ambos referentes aos últimos 12 meses do período de apuração. Essa base de cálculo do Fator R está estabelecida no §24 da lei complementar 123/2006:</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">§ 24.  Para efeito de aplicação do § 5o-K, considera-se folha de salários, incluídos encargos, o montante pago, nos doze meses anteriores ao período de apuração, a título de remunerações a pessoas físicas decorrentes do trabalho, acrescido do montante efetivamente recolhido a título de contribuição patronal previdenciária e FGTS, incluídas as retiradas de pró-labore.</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">§ 26.  Não são considerados, para efeito do disposto no § 24, valores pagos a título de aluguéis e de distribuição de lucros.</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">Com isso em mente, observe a fórmula de cálculo do Fator R, lembrando que se refere a valores dos últimos 12 meses do mesmo período a ser apurado:</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">Fator R = massa salarial / receita bruta</Text>
            <Text px={5} mb={6} fontSize="23px" lineHeight="35px">Aqui, é crucial também considerar as normas descritas na resolução CGSN nº 140/2018, que trata sobre o Simples Nacional:</Text>
            <UnorderedList border="3px solid #28283c" mb="40px" bgColor="white" borderRadius="8px" boxShadow=" 4px 4px 8px rgba(0,0,0,0.5)" w="100%" pl="40px" fontSize="20px" lineHeight="35px">
              <ListItem>se a massa salarial for maior que 0 (zero) e a receita bruta igual a 0 (zero), o Fator R será igual a 0,28, ou 28%;</ListItem>
              <ListItem>se a massa salarial for igual a 0 (zero) e a receita bruta maior do que 0 (zero), o Fator R será igual a 0,01, ou 1%;</ListItem>
              <ListItem>se a massa salarial e a receita bruta forem maiores que 0 (zero), o Fator R corresponderá à divisão entre um valor e outro dos últimos 12 meses. </ListItem>
            </UnorderedList>
          </VStack>
          <Box w="500px" h="800px" >
            {/* <CalculaFatorR /> */}
          </Box>
        </VStack>
      </VStack></Center>
  )
}
FatorR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};