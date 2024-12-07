'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { authClient } from '@/app/(client)/lib/auth-client';
import EmailBlock from '@/components/registration_form/email_block';
import PasswordInput from '@/components/inputs/passwordInput';
import ShineButton from '@/components/buttons/heartbeatButton';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    let toastId: string | undefined = undefined;

    try {
      setLoading(true);

      // Display loading toast if not already displayed
      if (!toastId) {
        toastId = toast.loading('Processing your authentication...');
      } else {
        toast.dismiss(toastId);
        toastId = toast.loading('Processing your authentication...');
      }

      // Prepare the data for the API request
      const data = {
        email,
        password,
      };

      // Use authClient to handle sign-up
      const response = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      },
    {
      onLoading: (ctx: any) => {},  // Already handling loading state via toast
      onSuccess: (ctx: any) => {
        toast.success('Sign-in successful!', { id: toastId, icon: '🎉' });
        setTimeout(() => (window.location.href = '/dashboard'), 3000);
      },
      onError: (ctx: any) => {
        toast.dismiss(toastId);
        toast.error(ctx.error.message || 'An error occurred. Please try again.', { id: toastId });
        setFormError(ctx.error.message || 'Registration failed');
      }
    })

    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error.message || 'An error occurred. Please try again.');
      setFormError(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 mx-auto">
    <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: { background: '#363636', color: '#fff', textAlign: 'center' },
          success: { duration: 3000 },
        }}
      />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <EmailBlock email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        
        {formError && <p className="text-red-500">{formError}</p>}

        <ShineButton loading={loading} />
      </form>
    </div>
  );
};

export default SignInForm;

