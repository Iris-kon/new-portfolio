import { ValidLocale, getTranslator } from '@/i18n'
import { WorksCard } from './worksCard'
import { createClient } from '@/prismicio'
import { asText } from '@prismicio/client'
import { Anchor } from './Anchor'

interface WorkProps {
  lang: ValidLocale
  works: {
    uid: string
    title: string, 
    image: string
    slider: { alt: string, src: string }[]
    description: string,
    site?: string,
    git?: string
  }[]
}

export async function Work({ lang, works }: WorkProps) {
  const translate = await getTranslator(lang)
  

  return (
    <section id="work" className="px-8 py-8 bg-slate-100">
      <Anchor />
      <h2 className='text-3xl'>{translate('work.best')}</h2>

      <div className="grid pt-4 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100">
        {works.map(w => (
           <WorksCard
            key={w.uid}
            lang={lang}
            action={translate('work.seeMore')}
            imageUrl={w.image!}
            title={w.title!}
            slider={w.slider}
            description={w.description}
            site={w.site}
            git={w.git}
          />
        ))}

      </div>
    </section>
  )
}
