import { ValidLocale, getTranslator } from '@/i18n'
import { GamepadIcon, MonitorSmartphoneIcon, ServerIcon } from 'lucide-react'
interface HabilitiesProps {
  lang: ValidLocale
}

export async function Habilities({ lang }: HabilitiesProps) {
  const translate = await getTranslator(lang)

  return (
    <section id="about" className="px-4 py-8 flex flex-col gap-8 justify-evenly md:flex-row bg-slate-200">
      <article  className="flex flex-col max-w-sm gap-4 py-2 px-4 items-center">
        <h2 className="sr-only">front end Development</h2>
        <MonitorSmartphoneIcon size={90} />
        <p className="text-justify">{translate('habilities.front')}</p>
      </article >
      <article  className="flex flex-col max-w-sm  gap-4 py-2 px-4  items-center">
        <h2 className="sr-only">Back end Development</h2>
        <ServerIcon size={90} />
        <p className="text-justify">{translate('habilities.server')}</p>
      </article >
      <article  className="flex flex-col max-w-sm  gap-4 py-2 px-4  items-center">
        <h2 className="sr-only">Game Development</h2>
        <GamepadIcon size={90} />
        <p className="text-justify">{translate('habilities.game')}</p>
      </article >
    </section>
  )
}
