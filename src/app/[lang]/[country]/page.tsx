import { Contact } from '@/app/components/Contact'
import { Habilities } from '@/app/components/Habilities'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Work } from '@/app/components/Work'
import { ValidLocale, getTranslator } from '@/i18n'

export default async function Home({
  params,
}: {
  params: { lang: string; country: string }
}) {
  const language = `${
    params.lang
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
      <Work lang={language} />
      <Contact lang={language} />
    </div>
  )
}
