
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import GradientText from '../GradientText/GradientText';

interface IImputNumber {
  isInvalid: boolean;
  valueNumber: any;
  onChange: any;
  onBlurValidate: any
  valueString: any;
  isValue: any;
  label: string;
  helper: string;
  error: string;
}


export default function ImputNumber({ isInvalid, valueNumber, onChange, onBlurValidate, valueString, isValue, label, helper, error }: IImputNumber) {

  ////console.log(valueNumber)
  ////console.log(valueString)
  function blur() {

    var blur = onBlurValidate(Number(valueNumber))
    return blur
  }

  return (


    <FormControl isInvalid={isInvalid}>
      <FormLabel><Text><GradientText style={""}>{label}</GradientText></Text></FormLabel>
      <Input
        type='number'
        value={valueNumber}
        onChange={onChange}
        bgColor="trasparent"
        border="3px solid gray"
        fontSize="26px"
        color="transparent"
        zIndex={11}
        position="relative"
        role='group'
        onBlur={() => blur()}
        _hover={{ border: "1px solid #f7d526", outline: "2px solid #f7d526" }}
      />
      <Input
        type='text'
        bgColor="transparent"
        border="3px solid gray"
        color="white"
        fontSize="26px"
        _groupHover={{ outline: "2px solid #f7d526", border: "1px solid #f7d526" }}
        _groupFocus={{ border: "1px solid #f7d526", outline: "2px solid #f7d526" }}
        value={valueString}
        readOnly
        zIndex={10}
        left={0}
        position="absolute"
        style={{ pointerEvents: "none" }}
      />
      {!isValue ? (
        <FormHelperText>
          {helper}
        </FormHelperText>
      ) : (
        <FormErrorMessage><Text>{error}</Text></FormErrorMessage>
      )}
    </FormControl>
  )
}
