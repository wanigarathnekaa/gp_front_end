"use client";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Home =() => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [router]);


  return (
    <div>
    <Navbar /> 
    <Sidebar />
      <h1>Home page</h1>
    </div>
    
  );
}

export default Home;
