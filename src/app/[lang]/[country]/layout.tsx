import { locales } from '@/i18n'
import { Montserrat, Lato } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { BackToTop } from '@/app/components/BackToTop'
import { ToastContainer } from 'react-toastify'

const montSerrat = Montserrat({ subsets: ['latin'], weight: "700", variable: '--font-montserrat' })
const lato = Lato({ subsets: ['latin'], weight: ["400" , "700"], variable: '--font-lato' })

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
      <body className={`${montSerrat.variable} ${lato.variable}`}>
        <ToastContainer />
        {children}
        <BackToTop />  
      </body>
    </html>
  )
}
