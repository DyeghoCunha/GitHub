import { Box, Divider, HStack, Image, Link, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import footerImage from "@/assets/image/logov2.png"
import ytLogo from "@/assets/image/youtube.png"
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'



export default function Footer() {
  return (
    <footer>
      <Box w="100%" borderTop="4px solid rgba(255,165,0,0.5)" >
        <HStack>
          <Image src={footerImage.src} w="200px" />
          <Divider orientation="vertical" color="red" bg="red" m="100px" />
          <List spacing={3} >
            <ListItem justifyContent="center" alignItems="start">
              <HStack justifyContent="start" alignItems="center">
                <Image width="20px" src={ytLogo.src} />
                <Link href='https://www.youtube.com/@cursodetecnologia' isExternal>
                  Curso de Tecnologia <ExternalLinkIcon mx='2px' color="orange" />
                </Link>
              </HStack>
            </ListItem>

            <ListItem justifyContent="center" alignItems="start">
              <HStack justifyContent="start" alignItems="center">
                <Image width="20px" src={ytLogo.src} />
                <Link href='https://www.youtube.com/@SamucaDoJava' isExternal>
                  Samuca do Java <ExternalLinkIcon mx='2px' color="orange" />
                </Link>
              </HStack>

            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>

        </HStack>

      </Box>

    </footer >
  )
}
