import { ReactNode } from "react";

export default function formLayout({ children }: { children: ReactNode }) {
  return <main className="flex w-full flex-grow mx-auto">{children}</main>;
}
