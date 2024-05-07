import Developer from '@/types/types';
import { createContext, useContext, useState, ReactNode } from 'react';



interface FormDeveloperContextData {
  developers: Developer[];
  setDevelopers: React.Dispatch<React.SetStateAction<Developer[]>>;
}

interface FormDeveloperProviderProps {
  children: ReactNode;
}

export const FormDeveloperContext = createContext({} as FormDeveloperContextData);



export function FormDeveloperProvider({ children }: FormDeveloperProviderProps) {
  const [developers, setDevelopers] = useState<Developer[]>([]);






  

  return (
    <FormDeveloperContext.Provider value={{ developers, setDevelopers }}>
      {children}
    </FormDeveloperContext.Provider>
  );
}