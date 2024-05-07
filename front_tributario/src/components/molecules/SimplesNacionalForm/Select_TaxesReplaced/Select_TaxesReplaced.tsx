import { IFormImput, TaxType } from "@/types/types";
import { Card, Checkbox, FormControl, FormLabel, HStack, Text } from "@chakra-ui/react";

interface ISelect_taxesReplaced extends IFormImput {
  checkedValues: TaxType[]
  setCheckedValues: React.Dispatch<React.SetStateAction<TaxType[]>>
}



const Select_TaxesReplaced = ({ isValid, label, id, helperText, errorText, checkedValues, setCheckedValues }: ISelect_taxesReplaced) => {
  const tax: TaxType[] = ["ICMS", "PIS COFINS", "ISS"];
  const handleCheckboxChange = (value: TaxType) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter(item => item !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  };
  return (
    <Card bg="gray.600" px="10px" minW="220px" >
      <FormControl isInvalid={!isValid} id={id} >
        <HStack  >
          <FormLabel mt="6px" bgGradient="linear(to-b, #B7F9A8, #32821C)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <HStack  >
            {tax.map((tax, index) => (
              <Checkbox
                id={id}
                name={id}
                colorScheme="green"
                value={tax}
                key={index}
                isChecked={checkedValues.includes(tax)}
                onChange={() => handleCheckboxChange(tax)}
              >
                <Text color="green" fontSize="15px">{tax}</Text>
              </Checkbox>
            ))}
          </HStack>
        </HStack>
      </FormControl>
    </Card>
  )
}

export default Select_TaxesReplaced