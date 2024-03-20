import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from '@chakra-ui/icons'
import { HiOutlineChevronUp } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { css } from '@emotion/react';
interface FormMenuDropDownProps {
  title: string;
  children: React.ReactNode
}


const customScroll = css`
  ::-webkit-scrollbar {
    width: 6px;
    background:rgba(255,0,0,0.1);
  }

  ::-webkit-scrollbar-track {
    background: rgba(255,150,0,0.1); 
  }
 
  ::-webkit-scrollbar-thumb {
    background: #fe7000; 
    border-radius:8px;
    
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #fe7000; 
  }
`;



export default function ForumMenuDropDown({ title, children }: FormMenuDropDownProps) {
  return (
    <Menu >
      {({ isOpen }) => (
        <React.Fragment>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            {title} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList  zIndex={100} bgColor="white" maxW="100%" minW="100%" py={0}>
            <InputGroup>
              <Input borderRadius="1px 1px 0px 0px" placeholder="Digite para pesquisar" />
              <InputRightElement  ><SearchIcon color="gray.500" /></InputRightElement>
            </InputGroup>
            <MenuList zIndex={0} css={customScroll} bgColor="white" maxW="100%" minW="100%" maxH="300px" overflowY="auto" pt={0}>
              {children}
            </MenuList>
          </MenuList>
        </React.Fragment>
      )}
    </Menu>
  )
}
