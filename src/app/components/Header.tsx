'use client'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitch'
import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

interface HeaderProps {
  nav: {
    isAccent?: boolean
    to: string
    text: string
  }[]
}

export function Header({ nav }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <header className="fixed w-screen flex justify-between items-center px-8 py-2 bg-slate-100 z-20">
        <Link href="/" className="text-3xl border-0">
          Íris
        </Link>

        <div className='flex-row-reverse lg:flex-row flex gap-4'>
          <button className='lg:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <XIcon /> : <MenuIcon />}
          </button>

          <nav className="gap-4 hidden lg:flex">
            {nav.map((n) => (
              n.isAccent ?
                (
                  <Link
                    key={n.text}
                    className="flex ease-in-out
                      items-center justify-center duration-300 
                      transition  text-base px-2 
                      rounded-md shadow-sm  text-white bg-orange-400
                      hover:bg-orange-600 hover:scale-110"
                    href={n.to}
                  >
                    {n.text}
                  </Link>
                ) :
                (
                  <Link
                    key={n.text}
                    className="group transition text-base duration-300 hover:text-green-300"
                    href={n.to}
                  >
                    {n.text}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-300" />
                  </Link>
                )

            ))}
          </nav>
          <LocaleSwitcher />
        </div>
      </header>


      <aside className={`fixed bg-slate-100 ease-in-out duration-500 lg:hidden h-screen w-64 right-0 z-10 ${isSidebarOpen ? "translate-x-0 " : "translate-x-full"
        }`}>
        <nav className='flex flex-col gap-4 pt-16 px-4'>
          {nav.map((n) => (
            <Link
              key={n.text}
              className="text-xl group transition duration-300"
              href={n.to}
            >
              {n.text}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-300" />
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
