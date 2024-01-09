import '@/styles/globals.css'
import { Providers } from '@/app/providers'

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
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
