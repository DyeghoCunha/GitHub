import { Box, Button, Center, HStack, Input, List, Menu, MenuButton, MenuItem, MenuList, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import FormMenuCard from '@/components/molecules/ForumMenuCard';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import FormMenuDropDown from '@/components/molecules/ForumMenuDropDown';
import ForumHeader from '@/components/organisms/ForumHeader';
import ForumTopicCard from '@/components/molecules/ForumTopicCard';
import { forumTopics } from '../../../db/propsDb';

export default function ForumPage() {
const forumTopicCardProps = forumTopics

  return (
    <Box pt="80px" as='main' w="100vw" h="100vh">
      <ForumHeader />
      <Box w="90vw" mt={5}>
      {forumTopicCardProps&&forumTopicCardProps.map((item,index)=>(
       <ForumTopicCard 
       answersCount={item.answersCount}
       avatar={item.avatar}
       category={item.category}
       date={item.date}
       pin={item.pin}
       title={item.title}
       views={item.views}
       key={index}
       /> 
      ))}
      
      </Box>
    </Box>
  )
}

ForumPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};
