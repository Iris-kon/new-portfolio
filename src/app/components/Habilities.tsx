import { ValidLocale, getTranslator } from '@/i18n'
import { GamepadIcon, MonitorSmartphoneIcon, ServerIcon } from 'lucide-react'
interface HabilitiesProps {
  lang: ValidLocale
}

export async function Habilities({ lang }: HabilitiesProps) {
  const translate = await getTranslator(lang)

  return (
    <section id="about" className="px-4 py-8 flex flex-col gap-8 justify-evenly md:flex-row bg-slate-200">
      <div className="flex flex-col max-w-sm gap-4 py-2 px-4 items-center">
        <MonitorSmartphoneIcon size={90} />
        <p className="text-justify">{translate('habilities.front')}</p>
      </div>
      <div className="flex flex-col max-w-sm  gap-4 py-2 px-4  items-center">
        <ServerIcon size={90} />
        <p className="text-justify">{translate('habilities.server')}</p>
      </div>
      <div className="flex flex-col max-w-sm  gap-4 py-2 px-4  items-center">
        <GamepadIcon size={90} />
        <p className="text-justify">{translate('habilities.game')}</p>
      </div>
    </section>
  )
}
