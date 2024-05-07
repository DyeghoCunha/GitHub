'use client'
import styles from './page.module.scss'
import ZoomParallax from '@/components/molecules/ZoomParallax';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Box, Card, Center, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import SecondSection from '@/components/organisms/Sections/SecondSection/SecondSection';
import GradientText from '@/components/atoms/GradientText/GradientText';

export default function Sobre() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>


            <Card


                fontSize="32px" color="hermesBlue.400"
                p={4}
                textAlign="justify"
                // bgColor="transparent"
                backdropFilter="blur(10px)"
                bgGradient="linear(130deg, rgba(241,226,194,0.5) 0%, rgba(242,242,243,0.5) 40%, rgba(242,242,243,0.5) 100%)"
                position="absolute" bottom="40%" right="0" mx={10} zIndex={10}
            >
                <HStack justifyContent="space-around">
                    <Box w="50%" p={5}>
                        <Heading mb={10}>Começamos da mesma forma que muitas empresas, que
                            hoje são sólidas, iniciaram no passado: com o sonho de
                            mudar o status quo da nossa área fazendo pelos clientes
                            algo de valor, realmente significativo para os seus negócios.
                        </Heading>
                        <Text>Em 2020, em um cenário de pandemia, extremamente desafiador para
                            pessoas e empresas, nosso sócio fundador, Emir Muse, havia recém
                            saído de uma sociedade que não estava alinhada com seus valores e o
                            seu desejo por entregar resultados que causassem impactos reais para
                            as empresas.
                        </Text>
                    </Box>

                    
                    <Card w="30%" p={5} color="hermesBlue.400">
                        <Text>Em busca de autonomia total para ir em
                            busca do seu propósito, ele decidiu abrir
                            a Hermès com seu amigo e sócio Valmor.
                            Em <GradientText>26 de novembro de 2020</GradientText> começaram
                            as obras para a montagem do nosso
                            escritório, paralelamente aos primeiros
                            serviços prestados para clientes
                            fidelizados que queriam continuar
                            recebendo o padrão de atendimento
                            superior que temos até hoje.</Text>
                    </Card>
                </HStack>
            </Card>


            <Text
                fontSize="10vw" color="hermesBlue.400"
                textAlign="justify"
                position="absolute" top="-5%" left="2%" zIndex={10}
            ><GradientText>Nossa História</GradientText></Text>

            <Text
                fontSize="10vw" color="hermesBlue.400"
                textAlign="justify"
                position="absolute" top="30%" left="2%" zIndex={10}
            ><GradientText>O Início</GradientText></Text>

            <ZoomParallax />


        </main >


    )
}
