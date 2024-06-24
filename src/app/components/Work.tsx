import { ValidLocale, getTranslator } from '@/i18n'
import { WorksCard } from './worksCard'

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
  //const works = await getWorks(lang.includes('en') ? 'en' : lang)

  return (
    <section id="work" className="px-4 py-8 bg-slate-100">
      <h2 className='text-3xl'>{translate('work.best')}</h2>

      <div className="grid pt-4 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100">
        <WorksCard
          lang={lang}
          action={translate('work.seeMore')}
          imageUrl="/imgs/Home.png"
          title="Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique nisi, in ultrices ipsum fringilla ac."
        />

        <WorksCard
          lang={lang}
          action={translate('work.seeMore')}
          imageUrl="/imgs/Home.png"
          title="Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique nisi, in ultrices ipsum fringilla ac."
        />

        <WorksCard
          lang={lang}
          action={translate('work.seeMore')}
          imageUrl="/imgs/Home.png"
          title="Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique nisi, in ultrices ipsum fringilla ac."
        />


        <WorksCard
          lang={lang}
          action={translate('work.seeMore')}
          imageUrl="/imgs/Home.png"
          title="Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique nisi, in ultrices ipsum fringilla ac."
        />

        <WorksCard
          lang={lang}
          action={translate('work.seeMore')}
          imageUrl="/imgs/Home.png"
          title="Sample Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor tristique nisi, in ultrices ipsum fringilla ac."
        />
      </div>
    </section>
  )
}
