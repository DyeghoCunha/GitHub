'use client'
import { Box, Flex } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';

export default function SvgBezierCurve() {

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, [])

  const setPath = (progress) => {
    const width = window.innerWidth * 1;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <Flex align="center" justify="center" bgColor="black" zIndex={1}  w="100vw" >
        <Flex flexDir="column" alignItems="flex-end" width="100vw" >
            <Box h="0px" mb="0px" w="100vw" position="relative" >
              <Box height="40px"  w="100%" position="relative" top="-20px" zIndex={1} _hover={{height:"500px", top:"-250px"}} onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} ></Box>
              <Box as='svg'  w="100%" height="400px" position="absolute" top="-250px">
                <Box as='path' stroke="hermesGold.500" strokeWidth="3px" zIndex={1} fill="none" ref={path}></Box>
              </Box>
            </Box>
        </Flex>
    </Flex>
  )
}
