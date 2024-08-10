'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter(x => x);

    return (
        <nav className="text-blue-500 mt-3 ml-4 mb-10">
            <ul className="flex">
                <li>
                    <Link href="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const title = value;

                    return (
                        <li key={to}>
                            <span className="mx-2">/</span>
                            {last ? (
                                <span className="text-gray-500">{title}</span>
                            ) : (
                                <Link href={to}>{title}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
