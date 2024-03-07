import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react"

const steps = [
  { title: 'Contato', description: "" },
  { title: 'Habilidades', description: "" },
  { title: 'Confirmação', description: '' },
]

export function StepperForm({ activeStep, onNext }:any) {

  return (
    <Stepper index={activeStep} colorScheme="orange">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box >
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

