import { Sidebar, Navbar} from '@/components/index';
//import Logo from '@/components/formComponents/Logo';
import React, { ReactNode } from 'react'

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
        <Sidebar/>
        <nav className='flex justify-between items-center h-[52px] px-4 py-2'>
            <Navbar />
        </nav>
        <main className='flex w-full flex-grow'>{children}</main>
    </div>
  );
}