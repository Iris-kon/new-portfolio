import { locales } from '@/i18n'
import { Montserrat, Rajdhani } from 'next/font/google'
import './globals.css'
import { BackToTop } from '@/app/components/BackToTop'

const montSerrat = Montserrat({ subsets: ['latin'], weight: "700", variable: '--font-montserrat' })
const rajdhani = Montserrat({ subsets: ['latin'], weight: ["400" , "600"], variable: '--font-rajdhani' })

export const metadata = {
  title: 'Íris Portfolio',
  description: 'Íris`s portfolio build with next',
}
export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${montSerrat.variable} ${rajdhani.variable}`}>
        {children}
        <BackToTop />  
      </body>
    </html>
  )
}
