import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Text } from '@chakra-ui/react';


const MotionSpan = motion(Text)

export default function HermesCharacter({paragraph,fontSize,colorProp}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <Text 
      ref={container}         
      fontSize={fontSize?fontSize:"180px"}
      display="flex" 
      lineHeight={1}
      flexWrap="wrap"
      
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} colorProp={colorProp} range={[start, end]}>{word}</Word>
      })
    }
    </Text>
  )
}

const Word = ({children, progress, range,colorProp}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <Text as="span" position="relative" mr="12px" mt="12px">
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char colorProp={colorProp} key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </Text>
  )
}

const Char = ({children, progress, range,colorProp}) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <Text  as="span" position="absolute" opacity="20%" >{children}</Text>
      <MotionSpan as="span"  color={colorProp ? colorProp :"hermesBlue.400"} style={{opacity: opacity}}>{children}</MotionSpan>
    </span>
  )
}
