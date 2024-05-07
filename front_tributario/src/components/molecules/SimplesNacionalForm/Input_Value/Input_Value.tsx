import { IFormImput } from "@/types/types";
import { Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CleanedValue } from "../utils/convertions";


const Input_Value = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
  const [localState, setLocalState] = useState(state);
  const [formatted, setFormatter] = useState(state)

 function formatValue(value:any) {
    const formattedValue = Number(value) / 100;
    return 'R$ ' + formattedValue.toFixed(2).replace('.', ',');
  }

  useEffect(() => {
    setLocalState(state);
  }, [state]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/\D/g, ''); // Remove non-digits
    setLocalState(rawValue);
    setFormatter(formatValue(rawValue));
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {

      setIsValid(validate(event.target.value));

      setState(CleanedValue(event.target.value));
    }
  };

  return (
    <Card bg="gray.600" p="10px" w="250px" >
      <FormControl isInvalid={!isValid} >
        <FormLabel bgGradient="linear(to-b, #B7F9A8, #32821C)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
        <Input
          placeholder={placeHolder}
          variant="outline"
          type="text"
          isRequired
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={formatted}
        />
        {isValid ? <FormHelperText fontSize="12px" color="gray">{helperText}</FormHelperText> : <FormErrorMessage fontSize="12px" color="red">{errorText}</FormErrorMessage>}
        <Input type="hidden" name={id} value={localState} />
      </FormControl>
    </Card>
  )
}

export default Input_Value;