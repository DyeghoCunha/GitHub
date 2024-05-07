import { Button } from "@chakra-ui/react";

interface ButtonDefaultProps {
  text: string;
  onClick: () => void;
  fontSize:string
}

export default function ButtonDefault({ text, onClick, fontSize }: ButtonDefaultProps) {
  return (
    <Button fontSize={fontSize} variant="primary" onClick={onClick}>
      {text}
    </Button>
  );
}
