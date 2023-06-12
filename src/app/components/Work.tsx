import { ValidLocale, getTranslator } from '@/i18n'

interface WorkProps {
  lang: ValidLocale
}

interface works {
  attributes: {
    id: number
    title: string
    description: string
    liveUrl?: string
    gitUrl?: string
    thumb?: string
  }
}

async function getWorks(lang: string): Promise<works[]> {
  const { NEXT_PUBLIC_STRAPI_TOKEN } = process.env

  const res = await fetch(
    `https://strapi-production-6a86.up.railway.app/api/works?locale=${lang}`,
    {
      headers: {
        Authorization: `bearer ${NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  )
  return res.json()
}

export async function Work({ lang }: WorkProps) {
  const translate = await getTranslator(lang)
  const works = await getWorks(lang)

  return (
    <section id="work" className="px-4 py-8 bg-slate-100">
      {JSON.stringify(works)}
    </section>
  )
}
