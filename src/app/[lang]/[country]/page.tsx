import { Contact } from '@/app/components/Contact'
import { Habilities } from '@/app/components/Habilities'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Work } from '@/app/components/Work'
import { ValidLocale, getTranslator } from '@/i18n'
import { createClient } from '@/prismicio'
import { asLink, asText } from '@prismicio/client'



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
    "Freelancer"
  ],
  openGraph: {
    images: 'https://iris-portfolio-theta.vercel.app/imgs/Home.png',
    title: 'Íris Oliveira - Home',
    description: 'Profissional experiente e versátil com habilidades em desenvolvimento de interfaces, back-end e jogos. Possui domínio de diversas tecnologias e frameworks, com foco na criação de soluções eficientes, escaláveis e com foco na experiência do usuário. Atua de forma proativa e busca constante atualização de seus conhecimentos para entregar produtos de alta qualidade.',
    alt: 'Íris Oliveira - Home, image'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Íris Oliveira - Home',
    description: 'Profissional experiente e versátil com habilidades em desenvolvimento de interfaces, back-end e jogos. Possui domínio de diversas tecnologias e frameworks, com foco na criação de soluções eficientes, escaláveis e com foco na experiência do usuário. Atua de forma proativa e busca constante atualização de seus conhecimentos para entregar produtos de alta qualidade.',
    images: {
      url: 'https://iris-portfolio-theta.vercel.app/imgs/Home.png',
      alt: 'Íris Oliveira - Home, image',
    },
  }
}

export const revalidate = 0

async function getData(lang: string) {

  const client = createClient()

  const data = await client.getByType("works", {
    pageSize: 12,
    lang
  })

  const worksRaw = data.results.map((r) => {
    return {
      uid: r.uid,
      title: r.data.title as string,
      description: asText(r.data.description),
      image: r.data.slices[0]?.primary.images[0]?.image.url ?? '',
      slider: r.data.slices[0]?.primary.images.map(i => ({ src: i.image.url!, alt: i.image.alt! })) ?? [],
      site: asLink(r.data.site) as string,
      git: asLink(r.data.git) as string
    }
  })

  return {
    worksRaw, totalPages: data.total_pages,
  }
}

export default async function Home({
  params,
}: HomeProps) {
  const language = `${params.lang
  }-${params.country.toUpperCase()}` as ValidLocale
  const data = await getData(language.toLowerCase())

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
    { 
      text: translate('nav.contact'), 
      to: '#contact'
    },
  ]

  return (
    <div className="bg-slate-100 w-full h-full">
      <Header nav={nav} />
      <Hero lang={language} />
      <Habilities lang={language} />
      <Work lang={language} works={data.worksRaw}  />
      <Contact lang={language} />
    </div>
  )
}
