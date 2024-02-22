
"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { Box, Button, HStack, Input, Spacer, Text, VStack } from "@chakra-ui/react";

import ImageOff from "@/assets/image/semFoto.png"

type ImagePicker = {
  name: string;
}

export default function ImagePicker({ name }: ImagePicker) {

  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef<any>();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)

  }

  return (
    <VStack justifyContent="center" alignItems="center">

      {!pickedImage &&
        <Box overflow="hidden" justifyContent="center" alignItems="center" borderRadius="20px" border="2px solid orange " w="205px" h="205px">
          <Image src={ImageOff.src} alt="no image" width="210" height="210" objectFit="cover" />
        </Box>
      }
      {pickedImage && (
        <Box overflow="hidden" justifyContent="center" alignItems="center" borderRadius="20px" border="2px solid orange " w="204px" h="204px">
          <Image src={pickedImage} alt="selected image" width="210" height="210" objectFit="cover" />
        </Box>
      )}

      <Input
        display="none"
        type="file"
        id={name}
        accept="image/png,image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        required
      />
      <Button m="5px 0px 0px 0px" variant="primary" type="button"
        onClick={handlePickClick}
      >Selecione uma Imagem
      </Button>
    </VStack>
  )
}