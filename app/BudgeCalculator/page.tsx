"use client"
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import Image from 'next/image';
import Link from 'next/link';

export default function BudgeCalculatorPage() {
  const [selectedOption, setSelectedOption] = useState<'login' | 'register'>('login');

  const handleOptionChange = (option: 'login' | 'register') => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1>Presupuestar</h1>
    </div>
  );
}
