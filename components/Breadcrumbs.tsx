'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter(x => x);

    const formatName = (str) => {
        return str
            .split('-') 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
            .join(' '); 
    };

    return (
        <nav className="text-blue-600 mt-3 ml-4 mb-10">
            <ul className="flex">
                <li>
                    <Link href="/">Dashboard</Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const title = formatName(value); 

                    return (
                        <li key={to}>
                            <span className="mx-2">/</span>
                            {last ? (
                                <span className="text-gray-600">{title}</span>
                            ) : (
                                <Link href={to}>{title}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
