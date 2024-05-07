import { Avatar, AvatarCard } from "@/components/atoms/BlogAvatar/AvatarCard"
import styles from './cardpost.module.css'
import Link from "next/link"
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Divider, Heading, Image, Text } from "@chakra-ui/react"

export const CardPost = ({ post }: any) => {
    return (
        <Link href={`/Blog/posts/${post.slug}`} className={styles.link}>

            <Card bgColor="gray.600" as="article" w="300px" h="400px"  p={0}>
                <CardHeader p={0} m={0}>
                    <Box as="figure" borderRadius="20px">
                        <Image
                         borderRadius="10px 10px 0px 0px"
                            src={post.cover}
                            w="100%"
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </Box>
                </CardHeader>
                <CardBody pl={5}  >
                    <Heading as="h2" fontSize="30px" >{post.title}</Heading>
                    <Text  noOfLines={4} >{post.body}</Text>
                </CardBody>
                
                <CardFooter p={5} alignItems="end" justifyContent="end">
                    <AvatarCard
                        imageSrc={post.author.avatar[0]}
                        userName={post.author.username}
                        name={post.author.name}
                    />
                </CardFooter>
            </Card>
        </Link>
    )
}