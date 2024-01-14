import '@/styles/globals.css'
import { Providers } from '@/app/providers'

import Header from '@/components/organism/nav/Headerv2'
import Footer from '@/components/organism/nav/Footer'

export const metadata = {
   title: {
      default: 'WhiteFoxDesigns - Logo Design Freelancer',
      template: '%s | WhiteFoxDesigns - Logo Design Freelancer',
   },
   description: `Experienced Freelance Logo Designer with 10 years of experience. I specialize in creating distinctive brand identities that capture your brand's story and set you apart in the market. Explore my portfolio to see a decade of creative excellence in logo design.`,
}

export default function LocaleLayout({ children }) {
   return (
      <html suppressHydrationWarning>
         <body className='dark min-h-screen bg-primary-dark text-white-50 antialiased'>
            <Providers>
               <div className='h-full pb-6'>
                  <Header />
                  <main className='container max-w-6xl mx-auto pt-32 px-6 min-h-screen pb-12'>{children}</main>
                  <Footer />
               </div>
            </Providers>
         </body>
      </html>
   )
}
