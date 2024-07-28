import { ValidLocale, getTranslator } from '@/i18n'
import { ContactForm } from './Forms/ContactForm'
import { RiWhatsappLine } from '@remixicon/react'

interface ContactProps {
  lang: ValidLocale
}

export async function Contact({ lang }: ContactProps) {
  const translate = await getTranslator(lang)

  const formTranslations = {
    clearText: translate('forms.actions.clear'),
    sendText: translate('forms.actions.send'),
    name: translate('forms.contact.name'),
    pronoun: translate('forms.contact.pronoun'),
    mail: translate('forms.contact.mail'),
    message: translate('forms.contact.message'),
    errors: {
      name: translate('forms.contact.errors.name'),
      pronoun: translate('forms.contact.errors.pronoun'),
      mail: translate('forms.contact.errors.mail'),
      message: translate('forms.contact.errors.message'),
    },
  }

  return (
    <section
      id="contact"
      className="px-8 py-8 flex flex-col gap-8 justify-evenly md:flex-row bg-slate-200"
    >
      <div className="w-full lg:w-2/4 h-full flex flex-col gap-2 justify-evenly px-2">
        <h2 className="text-3xl mb-2">{translate('contact.title')}</h2>
        <p className="text-justify text-lg">{translate('contact.paragraph')}</p>
        <p className="text-justify text-lg">{translate('contact.whatsappCta')}</p>
        <a
          href={`
            https://api.whatsapp.com/send?phone=5542988244413&amp;text=Olá.
          `}
          target="_blank" 
          rel="noopener noreferrer"
          className="
            w-full flex rounded-md gap-2 py-4 font-bold 
            items-center justify-center 
            text-white bg-green-400 shadow-md
            duration-300 transition-colors hover:bg-green-600"
        >
          <RiWhatsappLine />
          Whatsapp
        </a>
      </div>
      <div className="w-full lg:w-2/4">
        <ContactForm
          clearText={formTranslations.clearText}
          sendText={formTranslations.sendText}
          name={formTranslations.name}
          pronoun={formTranslations.pronoun}
          mail={formTranslations.mail}
          message={formTranslations.message}
          errorsT={formTranslations.errors}
        />
      </div>
    </section>
  )
}
