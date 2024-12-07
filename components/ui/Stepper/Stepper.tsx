"use client";

import React, { useState, useCallback } from 'react'
import StepIndicator from './StepIndicator'
import ProgressBar from './ProgressBar'
import StepContent from './StepContent'
import NavigationButtons from './NavigationButtons';

interface FieldProps {
    name: string
    type: string
    placeholder: string
}
  
interface StepProps {
    label: string
    fields?: FieldProps[]
}
  
const steps: StepProps[] = [
    { label: 'Introduction' }
    ,{
        label: 'Personal Information',
        fields: [
        { name: 'name', type: 'text', placeholder: 'Name' },
        { name: 'email', type: 'email', placeholder: 'Email' },
        ],
    },
    {
        label: 'Address Details',
        fields: [
        { name: 'address', type: 'text', placeholder: 'Address' },
        { name: 'city', type: 'text', placeholder: 'City' },
        { name: 'country', type: 'text', placeholder: 'Country' },
        ],
    },
    { label: 'Review & Submit' },
]

const Stepper: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0)
  
    const handleNext = useCallback(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }, [])
  
    const handlePrev = useCallback(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 0))
    }, [])
  
    return (
      <div className="mx-auto w-full max-w-5xl p-6">
        <StepIndicator currentStep={currentStep} steps={steps} />
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
        <StepContent />
        <NavigationButtons
          currentStep={currentStep}
          totalSteps={steps.length}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    )
  }
  
  export default Stepper;