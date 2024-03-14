import { Center, CenterProps, Image, VStack } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import transitionImg from "@/assets/image/transition.gif"

const MotionCenterProp = motion<CenterProps>(Center);

const MotionCenter: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: '100vh',
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: '-100vh',
    }
  };

  const pageTransition: any = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1.5
  };

  return (
    <MotionCenterProp
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      zIndex={1}
      position="absolute"
    >
      <VStack>
        {children}
      </VStack>
    </MotionCenterProp>
  );
}

export default MotionCenter;
