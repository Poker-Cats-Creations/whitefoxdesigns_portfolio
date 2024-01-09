import React from 'react'
import { notFound } from 'next/navigation'

//import Header from '@/components/organism/nav/Header'
import Header from '@/components/organism/nav/Headerv2'
import Footer from '@/components/organism/nav/Footer'

//import { Nav } from '@/components/organism/nav/Nav'
//import { AsideNav } from '@/components/organism/nav/AsideNav'

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
      <div className='h-full'>
         <Header />
         <main className='container max-w-6xl mx-auto pt-40 px-6 min-h-screen pb-12'>{children}</main>
         <Footer />
      </div>
   )
}
