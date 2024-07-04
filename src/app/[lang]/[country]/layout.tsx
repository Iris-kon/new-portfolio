import { locales } from '@/i18n'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackToTop } from '@/app/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {children}
        <BackToTop />  
      </body>
    </html>
  )
}
