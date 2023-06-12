import langParser from 'accept-language-parser'
import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, getLocalePartsFrom, locales } from './i18n'

const findBestMatchingLocale = (acceptLangHeader: string) => {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader)

  // find the first locale that matches a locale in our list
  for (let i = 0; i < parsedLangs.length; i++) {
    const parsedLang = parsedLangs[i]
    // attempt to match both the language and the country
    const matchedLocale = locales.find((locale) => {
      const localeParts = getLocalePartsFrom({ locale })
      return (
        parsedLang.code === localeParts.lang &&
        parsedLang.region === localeParts.country
      )
    })
    if (matchedLocale) {
      return matchedLocale
    }
    // if we didn't find a match for both language and country, try just the language
    else {
      const matchedLanguage = locales.find((locale) => {
        const localeParts = getLocalePartsFrom({ locale })
        return parsedLang.code === localeParts.lang
      })
      if (matchedLanguage) {
        return matchedLanguage
      }
    }
  }
  // if we didn't find a match, return the default locale
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale })
  const currentPathnameParts = getLocalePartsFrom({ pathname })

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale })
    return !pathname.startsWith(`/${localeParts.lang}/${localeParts.country}`)
  })

  if (pathnameIsMissingValidLocale && !pathname.includes('/imgs')) {
    // rewrite it so next.js will render `/` as if it was `/en/us`

    const matchedLocale = findBestMatchingLocale(
      request.headers.get('Accept-Language') || defaultLocale
    )

    if (matchedLocale !== defaultLocale) {
      const matchedLocaleParts = getLocalePartsFrom({ locale: matchedLocale })
      return NextResponse.redirect(
        new URL(
          `/${matchedLocaleParts.lang}/${matchedLocaleParts.country}${pathname}`,
          request.url
        )
      )
    } else {
      return NextResponse.rewrite(
        new URL(
          `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}${pathname}`,
          request.url
        )
      )
    }
  }
}

export const config = {
  // do not localize next.js paths
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}
