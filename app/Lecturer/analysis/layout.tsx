"use client";
import { Sidebar, Navbar } from "@/components/index";
//import Logo from '@/components/formComponents/Logo';
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBuilderPage = pathname.includes("builder");

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen ">
      {!isBuilderPage && (
        <>
          <Sidebar />
          <Navbar />
        </>
      )}
      <main className="flex w-full flex-grow pl-8 flex-col min-h-screen bg-blue-50 ">
        {children}
      </main>
    </div>
  );
}
