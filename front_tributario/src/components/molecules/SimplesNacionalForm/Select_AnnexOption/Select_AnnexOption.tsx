import { AnexoSimplesNacional, IFormImput } from "@/types/types";
import { Card, FormControl, FormHelperText, FormLabel, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";


const Select_AnnexOption = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
  const [localState, setLocalState] = useState(state);
  useEffect(() => {
    setLocalState(state);
  }, [state]);

  const anexo = AnexoSimplesNacional
  return (
    <Card bg="gray.600" h="116px" p="10px" w="250px" justifyContent="space-between" alignItems="self-end" >
      <FormControl isInvalid={!isValid} id={id} >
        <FormLabel bgGradient="linear(to-b, #B7F9A8, #32821C)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
        <Menu >
          <MenuButton boxShadow="inset -5px -5px 5px rgba(0,0,0,0.2),inset 5px 5px 5px rgba(255,255,255,0.2)" w="100%" as={Button} fontWeight="bold" variant="primary" rightIcon={<MdArrowDropDown />} >
            {localState || label}
          </MenuButton>
          <MenuList boxShadow="inset -5px -5px 5px rgba(0,0,0,0.3),inset 5px 5px 5px rgba(255,255,255,0.4)" h="190px" bgGradient="linear(to-b, rgba(183, 249, 168, 0.4), rgba(50, 130, 28, 0.4))" backdropFilter="blur(10px)" bgColor="transparent" borderRadius="10px">
            {Object.entries(anexo).map(([key, value]) => (
              <MenuItem fontSize="15px" fontWeight="bold" key={key} _hover={{
                bgGradient: "linear(to-b,rgba(183, 249, 168, 0.4), rgba(50, 130, 28, 0.4))",
                fontSize: "15px", borderRadius: "5px",
                boxShadow: " 0px 5px 5px rgba(0,0,0,0.3), -0px -5px 5px rgba(255,255,255,0.4)"

              }} onClick={() => { setLocalState(value); setState(value); }}>
                {value}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <input type="hidden" name={id} value={localState} />
        {isValid ? <FormHelperText fontSize="12px" color="gray">{helperText}</FormHelperText> : <FormHelperText fontSize="12px" color="red">{errorText}</FormHelperText>}
      </FormControl>
      <Link href="/"><Text fontSize="10px" color="red">Duvidas Sobre o Anexo ?</Text> </Link>
    </Card>
  )
}

export default Select_AnnexOption;