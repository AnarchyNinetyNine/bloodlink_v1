import { motion } from 'framer-motion';

const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({
    currentStep,
    totalSteps,
  }) => (
    <motion.div
      className="mt-4 h-2 rounded-full bg-red-500"
      initial={{ width: '0%' }}
      animate={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
    />
  )


  export default ProgressBar;