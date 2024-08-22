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
        <div className='flex justify-between items-center'>

            <div className='flex gap-4 ml-auto mr-20 mt-5'>

                {
                    links?.map(link => (

                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`text-black font-normal  hover:text-blue-500  ${
                                pathname === link.href
                                ? 'font-bold  text-blue-500'
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