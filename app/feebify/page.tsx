"use client";

import Image from "next/image";
import { Title } from "@/components/index";
import React from "react";
import { useRouter } from 'next/navigation';
import ButtonText from "@/components/ButtonText";

export default function Dashboard() {
    
  const router = useRouter();

  const handleNavigation = () => {
    router.push('./login');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl p-12 bg-white rounded-xl shadow-xl">
        
        <div className="text-center">
          <Title text="Welcome!" />
          <p className="text-gray-600 mt-3">
            Get started with Feebify and make your day productive!
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Image
            src="/01.gif"
            alt="Interactive Dashboard"
            className="rounded-lg"
            width={500} 
            height={500}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonText text="Get Started" onClick={handleNavigation}/>          
        </div>
      </div>
    </div>
  );
}
