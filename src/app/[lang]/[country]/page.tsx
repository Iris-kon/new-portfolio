import { Contact } from '@/app/components/Contact'
import { Habilities } from '@/app/components/Habilities'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Work } from '@/app/components/Work'
import { ValidLocale, getTranslator } from '@/i18n'



interface HomeProps {
  params: { lang: string; country: string }
}

export const metadata = {
  description: 'Profissional experiente e versátil com habilidades em desenvolvimento de interfaces, back-end e jogos. Possui domínio de diversas tecnologias e frameworks, com foco na criação de soluções eficientes, escaláveis e com foco na experiência do usuário. Atua de forma proativa e busca constante atualização de seus conhecimentos para entregar produtos de alta qualidade.',
  title: 'Íris Oliveira - Home',
  keywords: [
    "Íris Oliveira",
    "Iris Oliveira",
    "softwares",
    "desenvolvimento de sites",
    "desenvolvimento de sites institucionais",
    "desenvolvimento de lading pages",
    "desenvolvimento de apps android",
    "desenvolvimento de apps ios",
    "desenvolvimento de jogos com unreal",
    "lading pages",
    "migração de sistema",
    "atualização de sistema",
    "sites institucionais",
    "Website development",
    "Institutional website development",
    "Landing page development",
    "Android app development",
    " Game development with Unreal Engine",
    "Landing pages",
    "System migration",
    "System update",
    "Institutional websites",
  ],
  openGraph: {
    images: 'https://iris-portfolio.vercel.app/assets/imgs/Home.png',
    title: 'Íris Oliveira - Home',
    description: 'Profissional experiente e versátil com habilidades em desenvolvimento de interfaces, back-end e jogos. Possui domínio de diversas tecnologias e frameworks, com foco na criação de soluções eficientes, escaláveis e com foco na experiência do usuário. Atua de forma proativa e busca constante atualização de seus conhecimentos para entregar produtos de alta qualidade.',
    alt: 'Íris Oliveira - Home, image'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Íris Oliveira - Home',
    description: 'Profissional experiente e versátil com habilidades em desenvolvimento de interfaces, back-end e jogos. Possui domínio de diversas tecnologias e frameworks, com foco na criação de soluções eficientes, escaláveis e com foco na experiência do usuário. Atua de forma proativa e busca constante atualização de seus conhecimentos para entregar produtos de alta qualidade.',
    images: {
      url: 'https://iris-portfolio.vercel.app/assets/imgs/Home.png',
      alt: 'Íris Oliveira - Home, image',
    },
  }
}

export default async function Home({
  params,
}: HomeProps) {
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
    <div className="bg-slate-100 w-full h-full">
      <Header nav={nav} />
      <Hero lang={language} />
      <Habilities lang={language} />
      <Work lang={language}  />
      <Contact lang={language} />
    </div>
  )
}
