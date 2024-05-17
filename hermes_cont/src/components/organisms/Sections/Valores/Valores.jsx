
'use client';
import CardParallax from "@/components/CardParallax/CardParallax";
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import missao from "@/assets/image/missao.png"
import visao from "@/assets/image/visao.png"
import valores from "@/assets/image/valores.png"
import { Box } from '@chakra-ui/react';

export default function Valores() {
  const props = [
    {
      title: "nossa MISSÃO",
      description: "Nossa missão é atender às necessidades únicas de cada cliente, combinando a essência do atendimento humanizado com a precisão e agilidade proporcionadas pela tecnologia.",
      src: missao.src,
      color: "#131f45"
    },
    {
      title: "nossa VISÃO",
      description: "Ser um escritório contábil tecnológico renomado e reconhecido pela prestação de serviços de alta qualidade, por meio de um atendimento humanizado e único para cada cliente.",
      src: visao.src,
      color: "#F1AC19"
    },
    {
      title: "nossos VALORES",
      description: "RESPONSABILIDADE TRANSPARÊNCIA ÉTICA SERIEDADE RELAÇÕES GENUÍNAS",
      src: valores.src,
      color: "#ffffff"
    },

  ]



  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <Box ref={container} position="relative" >
      {
        props.map((project, i) => {
          const targetScale = 1 - ((props.length - i) * 0.05);
          return <CardParallax key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }
    </Box>
  )
}
