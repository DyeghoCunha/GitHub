import { Box, Heading, Link, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDeviantart, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from "./GlassContact.module.css"

export function GlassContact() {
  return (
    <Box className={styles.glassmorphism}>
      
      <Box className= { `${styles.square} ${styles.pos1}`} ></Box>
      <Box className={ `${styles.square} ${styles.pos2}`} ></Box>
      <Box className={ `${styles.square} ${styles.pos3}`} ></Box>
      <Box className={ `${styles.square} ${styles.pos4}`} ></Box>
      <Box className={ `${styles.square} ${styles.pos5w}`} ></Box>
      <UnorderedList>
        <ListItem><Link href="#"><Icon as={FaInstagram} /></Link></ListItem>
        <ListItem><Link href="#"><Icon as={FaDeviantart} /></Link></ListItem>
        <ListItem><Link href="#"><Icon as={FaLinkedinIn} /></Link></ListItem>
        <ListItem><Link href="#"><Icon as={FaGithub} /></Link></ListItem>
      </UnorderedList>
    </Box>
  );
}
