import { ValidLocale, getTranslator } from '@/i18n'
import { WorksCard } from './worksCard'
import { createClient } from '@/prismicio'
import { asText } from '@prismicio/client'
import { Anchor } from './Anchor'

interface WorkProps {
  lang: ValidLocale
}
export const revalidate = 3600

async function getData() {

  const client = createClient()

  const data = await client.getByType("works", {
    pageSize: 8,
  })

  const worksRaw = data.results.map((r) => {
    return {
      uid: r.uid,
      title: r.data.title,
      abstract: r.data.description,
      image: r.data.slices[0]?.primary.images[0]?.image.url,
      slider: r.data.slices[0]?.primary.images.map(i => ({ src: i.image.url!, alt: i.image.alt! })) ?? []
    }
  })

  return {
    worksRaw, totalPages: data.total_pages,
  }
}

export async function Work({ lang }: WorkProps) {
  const translate = await getTranslator(lang)
  const data = await getData()

  return (
    <section id="work" className="px-8 py-8 bg-slate-100">
      <Anchor />
      <h2 className='text-3xl'>{translate('work.best')}</h2>

      <div className="grid pt-4 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100">
        {data.worksRaw.map(w => (
           <WorksCard
            key={w.uid}
            lang={lang}
            action={translate('work.seeMore')}
            imageUrl={w.image!}
            title={w.title!}
            slider={w.slider}
            description={asText(w.abstract)}
          />
        ))}

      </div>
    </section>
  )
}
