export const defaultLocale = 'en-US'
export const locales = ['en-US', 'pt-BR'] as const
export type ValidLocale = (typeof locales)[number]

type PathnameLocale = {
  pathname: string
  locale?: never
}
type ISOLocale = {
  pathname?: never
  locale: string
}

type LocaleSource = PathnameLocale | ISOLocale

const dictionaries: Record<ValidLocale, any> = {
  'en-US': () =>
    import('./dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () =>
    import('./dictionaries/pt-BR.json').then((module) => module.default),
} as const

export const getDictionary = async (locale: ValidLocale) =>
  dictionaries[locale]?.() ?? dictionaries['en-US']();

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]()
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split('.')
      .reduce((obj, key) => obj && obj[key], dictionary)
    if (!translation) {
      return key
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value))
      })
    }
    return translation
  }
}

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split('-')
    return {
      lang: localeParts[0],
      country: localeParts[1],
    }
  } else {
    const pathnameParts = pathname!.toLowerCase().split('/')
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    }
  }
}
