import '@/styles/globals.css'
import { Providers } from '@/app/providers'

import Header from '@/components/organism/nav/Headerv2'
import Footer from '@/components/organism/nav/Footer'

export const metadata = {
   title: {
      default: 'StarOwl - Home',
      template: '%s | StarOwl',
   },
   description: 'StarOwl is a social media platform that allows you to connect with artists and creators.',
}

export default function LocaleLayout({ children }) {
   return (
      <html suppressHydrationWarning>
         <body className='dark min-h-screen bg-primary-dark text-white-50 antialiased'>
            <Providers>
               <div className='h-full'>
                  <Header />
                  <main className='container max-w-6xl mx-auto pt-40 px-6 min-h-screen pb-12'>{children}</main>
                  <Footer />
               </div>
            </Providers>
         </body>
      </html>
   )
}
