"use client"
import ItemCard from "@/components/molecules/ItemCard";
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { getItens } from "@/lib/itemsWithColor";
import { Box, Button, Card, Center, Divider, Grid, GridItem, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Component, useContext, useEffect } from "react";
import saveAllItemWithColor from "@/lib/actions.js"
import { ItemColorProvider, ItemContext, useItemColorContext } from "@/context/weaponsContext";
import App from "./_app";
import { AppProps } from "next/app";

function app() {

  //const { skins, itemWithColor } = useItemColorContext();
  const {skins, itemWithColor} = useContext(ItemContext)

  let quantidade = 10;
  
    return ( 
      <>
      <Box my={10}> 
      <Link  href="/itensWithDb">Filtro de Cores</Link>
      </Box>
  
      <Button onClick={async () => {
        const response = await fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemWithColor),
        });
  
        if (!response.ok) {
          throw new Error('Erro ao salvar o item');
        }
  
        const data = await response.json();
        console.log(data.message);
      }}>Salvar no Banco</Button>
  
        <Grid templateColumns="repeat(5,1fr)" gap={0}>
          {skins.splice(0,10).map((skin,index) => (
            <GridItem key={index} id={skin.id} w="100%">
              <ItemCard skins={skin} />
            </GridItem>
          ))}
        </Grid>
        <Divider m="10px" />
      </>
    );
    
}


export default function Home({ Component, pageProps }:AppProps){
  return(
    <ItemColorProvider>
      <Component {...pageProps} />
    </ItemColorProvider>
  )
}

