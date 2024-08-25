"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLink{
    href: string;
    label: string;

}

interface NavigationProps{
    links: NavigationLink[];
    pathname: string;
}

const Navigation = ({links=[], pathname } : NavigationProps) => {
    
    return (
        <div className='flex justify-between'>

            <div className='flex gap-4 ml-auto mt-3 mb-10 mr-5'>

                {
                    links?.map(link => (

                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`text-gray-600 font-bold hover:text-[#706ee4] hover:font-bold hover:underline ${
                                pathname === link.href
                                ? 'font-bold  text-[#706ee4]'
                                :''
                        
                            }`}
                        >
                            {link.label}
                        </Link>

                    ))
                }

                
            </div>
        </div>

  )
}

export default Navigation;