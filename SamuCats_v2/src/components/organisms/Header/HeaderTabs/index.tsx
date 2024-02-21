import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image } from '@chakra-ui/react';
import Link from 'next/link';

function HeaderTab() {

  const [tabIndex, setTabIndex] = useState(0);
  

  return (

    <Tabs m={0} onChange={(index) => setTabIndex(index)} p={0}   >
      <TabList color="orange" border="none" p={0} m={0} >   
        <Tab fontSize="20px" ><Link  href="/">Home</Link></Tab>
        <Tab fontSize="20px"><Link href="/Developers">Developers</Link></Tab>
        <Tab fontSize="20px"><Link href="/Projects">Projects</Link></Tab>
      </TabList>
    </Tabs>
  );
}

export default HeaderTab;
