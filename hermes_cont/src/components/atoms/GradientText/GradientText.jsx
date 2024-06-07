import { keyframes, Text, useColorModeValue } from '@chakra-ui/react'
import { css } from '@emotion/react';




export default function GradientText({ children, style }) {
  const waveAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
  // Estilos para a animação
  const waveAnimationStyle = css`
    animation: ${waveAnimation} 8s ease infinite;
    background-size: 400% 400%;
  `;

  // Valor do gradiente que muda com o modo de cor (claro/escuro)
  const bgGradientValue = useColorModeValue(
    'linear(to-r, hermesGold.400, hermesGold.500, white, hermesGold.500,hermesGold.400)',
    'linear(to-r, white, hermesGold.500, hermesGold.400, hermesGold.300)'
  );

  return (
    <Text
      as="strong"
      bgGradient={bgGradientValue}
      css={waveAnimationStyle}
      bgClip="text"
      {...style}
    >{children}</Text>
  )
}
