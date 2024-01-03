import React from 'react'
import { notFound } from 'next/navigation'

import { Nav } from '@/components/organism/nav/Nav'
import { AsideNav } from '@/components/organism/nav/AsideNav'

const locales = ['en', 'de', 'nl']

export const metadata = {
   title: {
      default: 'StarOwl - Home',
      template: '%s | StarOwl',
   },
   description: 'StarOwl is a social media platform that allows you to connect with artists and creators.',
}

export default function LocaleLayout({ children, params: { lang } }) {
   // Validate that the incoming `locale` parameter is valid
   const isValidLocale = locales.some((cur) => cur === lang)
   if (!isValidLocale) notFound()

   return (
      <div className='w-full bg-primary-dark pb-24 md:flex md:pb-0 xl:justify-center xl:gap-6'>
         <Nav />

         <main className='flex w-full flex-col gap-4 p-4 leading-none md:max-w-xl md:gap-6 md:p-0 md:py-[2.5rem] lg:max-w-lg xl:max-w-xl'>
            {children}
         </main>

         <AsideNav />
      </div>
   )
}
