import { CleanedValue } from "./convertions";

export function validateRbt12(value: string) {
  const cleanedValue = CleanedValue(value)
  const input = Number(cleanedValue);
  if (input > 0) {
    return true;
  } else {
    return false;
  }
}
