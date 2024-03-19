import Image from "next/image"
import { Avatar, AvatarCard } from "@/components/atoms/BlogAvatar"
import styles from './cardpost.module.css'
import Link from "next/link"
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Divider, Heading, Text } from "@chakra-ui/react"

export const CardPost = ({ post }: any) => {
    return (
        <Link href={`/Blog/posts/${post.slug}`} className={styles.link}>

            <Card as="article" w="300px" h="auto" border="1px solid red" mb={10}>
                <CardHeader>
                    <Box as="figure" borderRadius="20px">
                        <Image
                            src={post.cover}
                            width={300}
                            height={133}
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </Box>
                </CardHeader>
                <CardBody pl={5}  >
                    <Heading >{post.title}</Heading>
                    <Text >{post.body}</Text>
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