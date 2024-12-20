"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "@/context/AuthProvider";
import { getPrivileges } from "@/actions/privilege";

interface LoginRequest {
  regNumber: string;
  password: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [regNumber, setRegNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const { setToken, roleName } = useAuth();

  const [privileges, setPrivileges] = useState<string[]>([]);
  useEffect(() => {
    if (!roleName) {
      console.error("Role not found");
      return;
    }

    const fetchPrivileges = async () => {
      try {
        const response: string[] = await getPrivileges(roleName);
        setPrivileges(response);
      } catch (error) {
        console.error("Error fetching privileges:", error);
      }
    };

    fetchPrivileges();
    console.log("Privileges:", privileges);

  }, [roleName]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginRequest: LoginRequest = {
      regNumber,
      password,
    };

    try {
      const response = await login(loginRequest);
      if (response.accessToken !== null) {
        setMessage(response.message);
        setToken(response.accessToken, response.roleName); 

        if (response.roleName === "Student") {
          router.push("/Student/dashboard");
        } else if (response.roleName === "Lecturer") {
          router.push("/Lecturer/dashboard");
        } else if (response.roleName === "Examination") {
          router.push("/Examination/dashboard");
        } else {
          router.push("/Qac/dashboard");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  const handleRegNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegNumber(event.target.value);
  };

  const handlepasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-grow flex items-center justify-center px-28">
        {/* Grid Layout for Logo and Login */}
        <div className="grid grid-cols-3 w-full">
          {/* Left Column (2/3 of the width) */}
          <div className="col-span-2 flex justify-start items-start">
            <Image className="h-fit" src="/Login.jpg" alt="logo" width={1300} height={1300} />
          </div>

          {/* Right Column (1/3 of the width) */}
          <div className="col-span-1 flex justify-center items-center w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image className="h-fit py-3" src="/Logo_feebify.png" alt="logo" width={1000} height={500} />
              <form className="py-3 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="regNumber"
                    className="block text-md font-medium leading-6 text-gray-700"
                  >
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
                  <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="password"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      value={password}
                      onChange={handlepasswordChange}
                      placeholder="Password"
                      required
                      className="block w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder:text-gray-400 text-gray-700 py-2 px-0 sm:text-sm"
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <FaEyeSlash className="text-gray-500" />
                      ) : (
                        <FaEye className="text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <h4 className="text-gray-700 font-medium text-sm hover:underline cursor-pointer">
                    Forgot password?
                  </h4>
                </div>

                <div className="py-2">
                  <button
                    type="submit"
                    className="flex w-full mt-3 h-12 justify-center items-center rounded-full text-white font-semibold bg-[#FDC500] text-xl hover:bg-[#FFD500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>
              {message && <p className="text-center text-gray-900 mt-4">{message}</p>}
              {roleName && <p className="text-center text-gray-900 mt-4">Role: {roleName}</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;