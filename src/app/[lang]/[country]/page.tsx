import { Contact } from '@/app/components/Contact'
import { Habilities } from '@/app/components/Habilities'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Work } from '@/app/components/Work'
import { ValidLocale, getTranslator } from '@/i18n'
import Head from 'next/head'

export default async function Home({
  params,
}: {
  params: { lang: string; country: string }
}) {
  const language = `${params.lang
    }-${params.country.toUpperCase()}` as ValidLocale

  const translate = await getTranslator(language)

  const nav = [
    {
      text: translate('nav.about'),
      to: '#about',
    },
    {
      text: translate('nav.work'),
      to: '#work',
    },
    { text: translate('nav.contact'), to: '#contact' },
  ]

  return (
    <>
      <Head>
        <title>Íris Oliveira - Home</title>

        <meta property="og:title" content="Íris Oliveira - Home" />

        <meta
          name="description"
          content="Desenvolvedora full"
        />
        <meta
          property="og:description"
          content="A Myu Softwares está pronta para ajudar você a validar uma ideia, migrar seus sistemas para um modelo mais atualizado, 
  ou criar um sistema do zero para transformar sua visão em realidade. Estamos ansiosos para ouvir de você e oferecer a melhor solução para suas necessidades. 
  Entre em contato conosco hoje mesmo!"
        />
        <meta
          name="twitter:description"
          content="A Myu Softwares está pronta para ajudar você a validar uma ideia, migrar seus sistemas para um modelo mais atualizado, 
  ou criar um sistema do zero para transformar sua visão em realidade. Estamos ansiosos para ouvir de você e oferecer a melhor solução para suas necessidades. 
  Entre em contato conosco hoje mesmo!"
        />

        <meta
          name="image"
          content="https://iris-portfolio.vercel.app/assets/imgs/Home.png"
        />
        <meta
          property="og:image"
          content="https://iris-portfolio.vercel.app/assets/imgs/Home.png"
        />
        <meta
          name="twitter:image"
          content="https://iris-portfolio.vercel.app/assets/imgs/Home.png"
        />

        <meta
          name="keywords"
          content="
            Íris Oliveira,
            Iris Oliveira,
            softwares, 
            desenvolvimento de sites, 
            desenvolvimento de sites institucionais, 
            desenvolvimento de lading pages, 
            desenvolvimento de apps android,
            desenvolvimento de apps ios,
            desenvolvimento de jogos com unreal,
            lading pages, 
            migração de sistema, 
            atualização de sistema,
            sites institucionais,
            Website development,
            Institutional website development,
            Landing page development,
            Android app development,
            iOS app development,
            Game development with Unreal Engine,
            Landing pages,
            System migration,
            System update,
            Institutional websites,
          "
        />
      </Head>
      <div className="bg-slate-100 w-full h-full">
        <Header nav={nav} />
        <Hero lang={language} />
        <Habilities lang={language} />
        <Work lang={language} />
        <Contact lang={language} />
      </div>
    </>

  )
}
