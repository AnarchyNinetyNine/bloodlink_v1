import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'

interface StepProps {
  label: string
  fields?: FieldProps[]
}

interface FieldProps {
  name: string
  type: string
  placeholder: string
}

const StepIndicator: React.FC<{ currentStep: number; steps: StepProps[] }> = ({
    currentStep,
    steps,
  }) => (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center">
          <motion.div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              index <= currentStep ? 'bg-red-500/15 text-red-500' : 'bg-secondary'
            }`}
            initial={false}
            animate={{ scale: index === currentStep ? 1.2 : 1 }}
          >
            {index <= currentStep ? (
              <CheckCircle size={20} />
            ) : (
              <Circle size={20} />
            )}
          </motion.div>
          <div className="mt-2 text-sm">{step.label}</div>
        </div>
      ))}
    </div>
  )

  export default StepIndicator;