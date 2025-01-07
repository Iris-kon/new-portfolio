import { ValidLocale, getTranslator } from '@/i18n'
import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react'
import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  lang: ValidLocale
}

export async function Hero({ lang }: HeroProps) {
  const translate = await getTranslator(lang)

  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      <div className="max-w-[1000px] mr-auto px-8 pt-8 lg:pt-0 flex flex-col justify-center  h-full items-center  lg:items-start">
        <header className="flex gap-2 items-center justify-center">
          <h1 className="text-2xl font-bold text-center lg:text-left">
            {translate('hero.line')}
          </h1>
          <span className="text-3xl" aria-hidden="true" >|</span>
          <a 
            href="https://github.com/Iris-kon"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit  my GitHub profile" 
            className='group flex items-center justify-center hover:text-orange-500 transition-colors p-1'
          >
            <RiGithubFill size={30} />
            <span 
              className='w-0 invisible pl-1 text-orange-500 transition duration-300 ease-in-out group-hover:visible group-hover:w-12' 
            >
              Github
            </span>
          </a>
          <a 
            href="https://www.linkedin.com/in/iris-oliveira-k-on/"
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit  my linkedin profile"
            className='group flex items-center justify-center hover:text-blue-900 transition-colors p-1'
          >
            <RiLinkedinBoxFill size={30} />
            <span 
              className='w-0 invisible pl-1 text-blue-900 transition duration-300 ease-in-out group-hover:visible group-hover:w-16' 
            >
              Linkedin
            </span>
          </a>
          <a 
            href="mailto://irisoliveira.k.on@gmail.com" 
            aria-label="Send me a email"
            target="_blank" 
            rel="noopener noreferrer"
            className='group flex items-center justify-center hover:text-green-500 transition-colors p-1'
          >
            <MailIcon size={30} />
            <span 
              className='w-0 invisible pl-1 text-green-500 transition duration-300 ease-in-out group-hover:visible group-hover:w-14' 
            >
              E-mail
            </span>
          </a>
        </header>
        
        <h2 className="text-4xl sm:text-7xl font-bold text-center lg:text-left">
          {translate('hero.title')}
        </h2>
        <p className="py-4 max-w-[700px] text-center lg:text-left">
          {translate('hero.subtitle')}
        </p>
        <Link
          href="#contact"
          className="
            cursor-pointer transition ease-in-out w-48 font-semibold flex shadow-md 
            items-center justify-center py-3 rounded-md text-gray-800 
            bg-orange-400 duration-300 hover:bg-orange-600 hover:scale-110"
        >
          {translate('hero.cta')}
        </Link>
      </div>
      <div className="w-full lg:w-2/4 h-full relative">
        <Image
          src="/imgs/avatar.png"
          sizes="(max-width: 768px) 100vw"
          fill
          alt="Iris avatar"
          priority={true}
        />
      </div>
    </section>
  )
}
