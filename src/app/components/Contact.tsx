'use client'

import { ValidLocale, getTranslator } from '@/i18n'
import { ContactForm } from './Forms/ContactForm'

interface ContactProps {
  lang: ValidLocale
}

export async function Contact({ lang }: ContactProps) {
  const translate = await getTranslator(lang)

  const formTranslations = {
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
      className="px-4 py-8 flex flex-col gap-8 justify-evenly md:flex-row bg-slate-200"
    >
      <div className="w-full lg:w-2/4 h-full flex flex-col gap-4 justify-evenly px-2">
        <h2 className="text-3xl">{translate('contact.title')}</h2>
        <p className="text-justify text-lg">{translate('contact.paragraph')}</p>
      </div>
      <div className="w-full lg:w-2/4">
        <ContactForm
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
