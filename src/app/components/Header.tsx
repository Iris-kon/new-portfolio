import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitch'

interface HeaderProps {
  nav: {
    to: string
    text: string
  }[]
}

export function Header({ nav }: HeaderProps) {
  return (
    <div className="flex justify-between items-center px-8 py-2 bg-slate-100">
      <Link href="/" className="text-3xl border-0">
        TO
      </Link>
      <nav className="flex gap-4">
        {nav.map((n) => (
          <Link
            key={n.text}
            className="group transition duration-300"
            href={n.to}
          >
            {n.text}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
          </Link>
        ))}
        <LocaleSwitcher />
      </nav>
    </div>
  )
}
