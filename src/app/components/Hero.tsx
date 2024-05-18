import { ValidLocale, getTranslator } from '@/i18n'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  lang: ValidLocale
}

export async function Hero({ lang }: HeroProps) {
  const translate = await getTranslator(lang)

  return (
    <section id="about" className="w-full h-screen flex flex-col md:flex-row">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  items-center h-full lg:justify-center lg:items-start">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-2xl font-bold text-center lg:text-left">
            {translate('hero.line')}
          </h1>
          <p className="text-3xl">|</p>
          <Link href="/">
            <GithubIcon />
          </Link>
          <Link href="/">
            <LinkedinIcon />
          </Link>
          <Link href="/">
            <MailIcon />
          </Link>
        </div>
        <h2 className="text-4xl sm:text-7xl font-bold text-center lg:text-left">
          {translate('hero.title')}
        </h2>
        <p className="py-4 max-w-[700px] text-center lg:text-left">
          {translate('hero.subtitle')}
        </p>
        <Link
          href="#work"
          scroll={false}
          className="cursor-pointer w-48 font-semibold flex items-center justify-center py-3 rounded-md text-gray-100 bg-green-500 duration-300 hover:bg-green-700"
        >
          {translate('hero.allWorks')}
        </Link>
      </div>
      <div className="w-full lg:w-2/4 h-full relative">
        <Image
          src="/imgs/avatar.png"
          sizes="(max-width: 768px) 100vw"
          fill
          alt="avatar"
        />
      </div>
    </section>
  )
}
