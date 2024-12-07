'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import NameBlock from './name_block';
import EmailBlock from './email_block';
import PasswordBlock from './password_block';
import ShineButton from '@/components/buttons/heartbeatButton';
import { authClient } from '@/app/(client)/lib/auth-client';


const RegistrationForm = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({ password: '', confirmPassword: '' });
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (password.password !== password.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    let toastId: string | undefined = undefined;

    try {
      setLoading(true);

      // Display loading toast if not already displayed
      if (!toastId) {
        toastId = toast.loading('Processing your registration...');
      } else {
        toast.dismiss(toastId);
        toastId = toast.loading('Processing your registration...');
      }

      const data = {
        firstName: name.firstName,
        lastName: name.lastName,
        email: email,
        password: password.password,
        phone,
        location: { type: 'Point', coordinates: [-89.6504, 39.7817] },
        gender: 'Male',
        bloodType: 'A+',
        address: 'NR 03 RUE 16 QU ANAS SAfi',
      };

      console.log('data', data);
      // Handle sign-up with Email and Paswword
      const response = await authClient.signUp.email(
        {
          email: data.email,
          password: data.password,
          name: `${data.firstName} ${data.lastName}`,
          callbackURL: 'http://localhost:3000/donor/account/sign-in',
        },
        {
          onLoading: (ctx: any) => {},  // Already handling loading state via toast
          onSuccess: (ctx: any) => {
            toast.success('Registration successful!', { id: toastId, icon: '🎉' });
            setTimeout(() => (window.location.href = '/donor/account/sign-in'), 3000);
          },
          onError: (ctx: any) => {
            toast.dismiss(toastId);
            toast.error(ctx.error.message || 'An error occurred. Please try again.', { id: toastId });
            setFormError(ctx.error.message || 'Registration failed');
          }
        }
      );
      
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
        <NameBlock name={name} setName={setName} />
        <EmailBlock email={email} setEmail={setEmail} />
        <PasswordBlock password={password} setPassword={setPassword} />
        <div className="space-y-2">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 border-gray-500 transition"
            required
          />
        </div>
        {formError && <p className="text-red-500">{formError}</p>}
        <ShineButton loading={loading} />
      </form>
    </div>
  );
};

export default RegistrationForm;