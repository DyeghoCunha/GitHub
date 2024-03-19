import Image from "next/image"
import styles from './avatar.module.css'
import { Badge, Box, Flex, Text, Avatar, HStack, VStack } from "@chakra-ui/react"

export const AvatarCard = ({ userName, name, imageSrc }) => {
    return (
        <HStack >
            <Avatar boxSize="40px" borderRadius="50%" src={imageSrc} />
            <VStack justifyContent="start" alignItems="start" gap={0}>
                <Text m={0} fontWeight='bold'>
                    {name}
                </Text>
                <Text m={0} color="gray" fontSize='sm'>@{userName}</Text>
            </VStack>
        </HStack>
    )
}