"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Layout({ children }) {
  const pathname = usePathname();
  const navLink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
  ]

  return (
    <>
      <div className="font-black text-2xl bg-orange-500 w-full h-[200px] mb-2 flex flex-col items-center justify-center">
        <div className="w-full text-center">
          Header - for auth layout
        </div>
        <div className="w-full text-center">
          {
            navLink.map((item, key) =>{
              const isActive = pathname === item.href || (pathname.startsWith(item.href)&& item.href !=='/')
              return <Link className={isActive ?'text-white':{}} key={key} href={item.href}>{item.name}|</Link>
            })
          }
        </div>
      </div>
      <div>
        {children}
      </div>
      <div className="font-black text-2xl bg-orange-900 w-full h-[200px] mt-2 flex items-center justify-center">
        Footer - for auth layout
      </div>
    </>
  )
}
