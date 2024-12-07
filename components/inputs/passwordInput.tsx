'use client';

import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

interface PasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-96 mx-auto space-y-4">
      <label htmlFor="pass" className="block text-sm font-medium">
        Password
      </label>
      <div className="relative mt-1">
        <input
          type={isVisible ? 'text' : 'password'}
          id="pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2 border-2 border-gray-500 transition"   
        />
        <div
          className="absolute top-3 right-4 text-2xl text-gray-500 cursor-pointer"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <Eye size={22} /> : <EyeOff size={22} />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
