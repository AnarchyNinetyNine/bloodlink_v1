const ButtonClasses = 'rounded-2xl bg-red-500 px-2 py-1 text-sm font-medium text-white'

const NavigationButtons: React.FC<{
    currentStep: number
    totalSteps: number
    handlePrev: () => void
    handleNext: () => void
  }> = ({ currentStep, totalSteps, handlePrev, handleNext }) => (
    <div className="flex justify-end gap-3">
      {currentStep === 0 ? null : (
        <button onClick={handlePrev} className={ButtonClasses}>
          Previous
        </button>
      )}
      {currentStep === totalSteps - 1 ? null : (
        <button onClick={handleNext} className={ButtonClasses}>
          Next
        </button>
      )}
    </div>
  )

  export default NavigationButtons;