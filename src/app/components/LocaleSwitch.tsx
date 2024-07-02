'use client'

import { locales } from '@/i18n'
import { ChevronDownIcon, LanguagesIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale.substring(0, locale.indexOf('-'))
    segments[2] = locale.substring(locale.indexOf('-') + 1).toLowerCase()
    return segments.join('/')
  }

  return (
    <div className="group relative h-full  z-10">
      <div className="flex px-2 justify-center items-center rounded-full border-gray-200 border-2 group-hover:border-green-300">
        <LanguagesIcon />
        <ChevronDownIcon />
      </div>
      <ul className="absolute px-2 w-full rounded-br-lg rounded-bl-lg justify-center bg-slate-100 items-center">
        {locales.map((locale) => {
          return (
            <li className="group-hover:block hidden" key={locale}>
              <Link
                className="hover:text-green-300 transition duration-300"
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
