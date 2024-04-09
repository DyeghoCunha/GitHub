import { IFormImput } from "@/types/types";
import { Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

  
  const Input_Value = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
      setLocalState(state);
    }, [state]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalState(event.target.value);
    };
    const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== '') {
        setIsValid(validate(event.target.value));
        setState(event.target.value);
      }
    };

    return (
      <Card bg="gray.600" p="10px" w="250px" >
        <FormControl isInvalid={!isValid} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <Input
            placeholder={placeHolder}
            variant="outline"
            type="text"
            id={id}
            name={id}
            isRequired
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={localState}
          />
          {isValid ? <FormHelperText fontSize="12px" color="gray">{helperText}</FormHelperText> : <FormErrorMessage fontSize="12px" color="red">{errorText}</FormErrorMessage>}
        </FormControl>
      </Card>
    )
  }

export default Input_Value;