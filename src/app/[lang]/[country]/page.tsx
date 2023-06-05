import { Header } from '@/app/components/Header'
import { ValidLocale, getTranslator } from '@/i18n'

export default async function Home({
  params,
}: {
  params: { lang: string; country: string }
}) {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}` as ValidLocale
  )

  const nav = [
    {
      text: translate('nav.about'),
      to: '/',
    },
    {
      text: translate('nav.work'),
      to: '/',
    },
    { text: translate('nav.contact'), to: '/' },
  ]

  return (
    <div className="bg-slate-100 w-full h-full">
      <Header nav={nav} />
      <h1>{translate('welcome.helloWorld')}</h1>
      <h2 className="text-2xl text-blue-300">
        {translate('welcome.happyYear', {
          year: new Date().getFullYear(),
        })}
      </h2>
    </div>
  )
}
