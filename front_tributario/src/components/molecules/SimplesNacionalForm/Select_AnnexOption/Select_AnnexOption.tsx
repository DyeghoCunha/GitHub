import { AnexoSimplesNacional, IFormImput } from "@/types/types";
import { Card, FormControl, FormHelperText, FormLabel,Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
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
          <FormLabel bgGradient="linear(to-r, orange, blue)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <Menu >
            <MenuButton w="100%" as={Button} fontWeight="bold" variant="primary" rightIcon={<MdArrowDropDown />} >
              {localState || label}
            </MenuButton>
            <MenuList bgGradient="linear(to-r, orange, blue)" borderRadius="10px">
              {Object.entries(anexo).map(([key, value]) => (
                <MenuItem fontWeight="bold" key={key} onClick={() => { setLocalState(value); setState(value); }}>
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