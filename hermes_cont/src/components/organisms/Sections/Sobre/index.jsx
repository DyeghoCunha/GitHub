'use client'
import styles from './page.module.scss'
import ZoomParallax from '@/components/molecules/ZoomParallax';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Box, Card, Center, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
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
                fontSize={{ base: "10px", md: "32px" }} color="hermesBlue.400"
                p={{ base: 2, md: 4 }}
                textAlign="justify"
                bgColor="transparent"
                backdropFilter="blur(10px)"
                boxShadow="4px 4px 8px black"
                bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, rgba(242,242,243,0.8) 40%, rgba(242,242,243,1) 100%)"
                position="absolute" bottom={{base:"20%",md:"40%"}} right="0" mx={{ base: 0, md: 10 }} zIndex={10}
            >
                <Stack direction={{ base: "column", md: "row" }} justifyContent="space-around">
                    <Box w={{ base: "100%", md: "50%" }} p={{ base: 0, md: 5 }}>
                        <Heading mb={{base:2,md:10}} fontSize={{ base: "10px", md: "32px" }}>
                            Começamos da mesma forma que muitas empresas, que
                            hoje são sólidas, iniciaram no passado: com o sonho de
                            mudar o status quo da nossa área fazendo pelos clientes
                            algo de valor, realmente significativo para os seus negócios.
                        </Heading>
                        <Text fontSize={{ base: "10px", md: "32px" }}>Em 2020, em um cenário de pandemia, extremamente desafiador para
                            pessoas e empresas, nosso sócio fundador, Emir Muse, havia recém
                            saído de uma sociedade que não estava alinhada com seus valores e o
                            seu desejo por entregar resultados que causassem impactos reais para
                            as empresas.
                        </Text>
                    </Box>


                    <Card w={{ base: "100%", md: "40%" }}

                        bgColor="transparent"
                        p={{ base: 2, md: 5 }}
                        color="hermesBlue.400"
                        boxShadow="inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(0,0,0,0.2)">
                        <Text fontSize={{ base: "10px", md: "32px" }}>Em busca de autonomia total para ir em
                            busca do seu propósito, ele decidiu abrir
                            a <GradientText style={""}>Hermès</GradientText> com seu amigo e sócio Valmor.
                            Em <strong>26 de novembro de 2020</strong> começaram
                            as obras para a montagem do nosso
                            escritório, paralelamente aos primeiros
                            serviços prestados para clientes
                            fidelizados que queriam continuar
                            recebendo o padrão de atendimento
                            superior que temos até hoje.</Text>
                    </Card>
                </Stack>
            </Card>


            <Text
                fontSize="10vw" color="hermesBlue.400"
                textAlign="justify"
                position="absolute" top={{ base: "-5%", md: "-5%" }} left="2%" zIndex={0}
            ><GradientText style={""}>Nossa História</GradientText></Text>

            <Text
                fontSize={{ base: "20vw", md: "10vw" }} color="hermesBlue.400"
                textAlign="justify"
                position="absolute" top={{ base: "53%", md: "30%" }} left="2%" zIndex={10}
            ><GradientText style={""}>O Início</GradientText></Text>

            <ZoomParallax />


        </main >


    )
}
