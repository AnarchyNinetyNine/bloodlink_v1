import Stepper from '@/components/ui/Stepper/Stepper'
import { ThemeSwitcherButton } from '@/components/themeModes/ThemeSwitcherBtn'

const App = () => {
  return (
    <div className='flex items-center justify-center min-h-screen mx-auto w-full'>
      <Stepper />
      <div className="absolute top-4 right-4">
        <ThemeSwitcherButton />
      </div>
    </div>
  );
};

export default App;