"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { login } from '@/actions/login';
import { useRouter } from 'next/navigation';

interface LoginRequest {
  regNumber: string;
  nic: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [regNumber, setRegNumber] = useState<string>('');
  const [nic, setNic] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginRequest: LoginRequest = {
      regNumber,
      nic,
    };

    try {
      const response = await login(loginRequest);
      setMessage(response);

      // Redirect to dashboard after successful login
      router.push('/Student/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  const handleRegNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegNumber(event.target.value);
  };

  const handleNicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNic(event.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#EEF2FF] ">
      <header className="flex justify-center items-center h-16 bg-[#ffffff] shadow-lg">
        <Image src="/Logo.png" alt="Logo" className="h-14" width={190} height={45}  />
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm p-8 bg-[#ffffff] rounded-xl shadow-xl">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-700 mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="regNumber" className="block text-sm font-medium leading-6 text-gray-700">
                Registration Number
              </label>
              <div className="mt-2">
                <input
                  id="regNumber"
                  name="regNumber"
                  type="text"
                  value={regNumber}
                  onChange={handleRegNumberChange}
                  placeholder="2021/CS/001"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nic" className="block text-sm font-medium leading-6 text-gray-700">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={nic}
                  onChange={handleNicChange}
                  placeholder="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          {message && <p className="text-center text-gray-900 mt-4">{message}</p>}
        </div>
      </main>
    </div>
  );
};

export default Page;