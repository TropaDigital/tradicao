import { useState } from "react";

export function useSteps(steps: any, defaultValue: number) {
  const [currentStep, setCurrentStep] = useState(defaultValue ?? 0);

  function changeStep(i?: any, event?: any) {
    if(event) event.preventDefault();

    if(i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }
  
  return { 
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 1 ? true : false, 
  }
}