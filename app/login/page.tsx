"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { login } from '@/actions/login';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from '@/context/AuthProvider';

interface LoginRequest {
  regNumber: string;
  nic: string;
}
// Storing token in Session Storage
const saveToken = (obj: object) => {
  sessionStorage.setItem("user", JSON.stringify(obj));
};

const Page: React.FC = () => {
  const router = useRouter();
  const [regNumber, setRegNumber] = useState<string>('');
  const [nic, setNic] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const {setToken,decodedToken} = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const loginRequest: LoginRequest = {
      regNumber,
      nic,
    };
    console.log("kzbnijk",loginRequest);

    try {
      const response = await login(loginRequest);
      if (response.accessToken !== null) {
        setMessage('Login successful');
        setToken(response.accessToken);
      }

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-grow flex items-center justify-center px-28">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-2 flex justify-start items-start">
            <Image className='h-fit' src="/Login.jpg" alt="logo" width={1300} height={1300} />
          </div>

          <div className="col-span-1 flex justify-center items-center w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image className='h-fit py-3' src="/Logo_feebify.png" alt="logo" width={1000} height={500} />
              <form className="py-3 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="regNumber" className="block text-md font-medium leading-6 text-gray-700">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="regNumber"
                      name="regNumber"
                      type="text"
                      value={regNumber}
                      onChange={handleRegNumberChange}
                      placeholder="Username"
                      required
                      className="block w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder:text-gray-400 text-gray-800 py-2 px-0 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nic" className="block text-md font-medium leading-6 text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="password"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      value={nic}
                      onChange={handleNicChange}
                      placeholder="Password"
                      required
                      className="block w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder:text-gray-400 text-gray-700 py-2 px-0 sm:text-sm"
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <h4 className='text-gray-700 font-medium text-sm hover:underline cursor-pointer'>Forgot password?</h4>
                </div>

                <div className="py-2">
                  <button
                    type="submit"
                    className="flex w-full mt-3 h-12 justify-center items-center rounded-full text-white font-semibold bg-[#FDC500] text-xl hover:bg-[#FFD500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Login
                  </button>
                </div>
              </form>
              {message && <p className="text-center text-gray-900 mt-4">{message}</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
