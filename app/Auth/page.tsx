"use client"
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

export default function AuthPage() {
  const [selectedOption, setSelectedOption] = useState<'login' | 'register'>('login');

  const handleOptionChange = (option: 'login' | 'register') => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center">
      <div className="w-screen bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-center">
        <div className="flex mb-8 justify-center rounded-lg ">
          <div
            className={`cursor-pointer py-2 px-8  ${
              selectedOption === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleOptionChange('login')}
          >
            Iniciar Sesión
          </div>
          <div
            className={`cursor-pointer py-2 px-8  ${
              selectedOption === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleOptionChange('register')}
          >
            Registrarse
          </div>
        </div>
        <div className="flex flex-col h-full">
          {selectedOption === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
