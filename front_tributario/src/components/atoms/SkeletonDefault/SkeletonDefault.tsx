import { Skeleton } from "@chakra-ui/react"

interface ISkeletonDefault {
  width: string;
  height: string;
}

const SkeletonDefault = ({ width, height }: ISkeletonDefault) => {
  return (
    <Skeleton boxShadow=
      " inset 0px 5px 5px rgba(0,0,0,0.3), inset -0px -5px 5px rgba(255,255,255,0.4)"
      startColor='rgba(183, 249, 168, 0.4)'
      border="1px solid red"
      endColor='rgba(50, 130, 28, 0.4)'
      w={width} h={height}
      bgColor="green"
      borderRadius="10px" />
  )
}

export default SkeletonDefault