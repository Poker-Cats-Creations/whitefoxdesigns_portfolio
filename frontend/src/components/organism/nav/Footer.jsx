import React from 'react'
import { OutlineHome, SolidLogo } from '@/icons/Icons'
import Link from 'next/link'

import { OutlineTwitter, OutlineInstagram, OutlineDribbble } from '@/icons/Icons'

const Footer = () => {
   const navLinks = [
      { href: '/', title: 'Home' },
      { href: '/about', title: 'About Me' },
      { href: '/tos', title: 'Term of Service' },
      { href: '/contact', title: 'Contact' },
   ]

   const socialLinks = [
      { href: 'https://dribbble.com/Whitefox_Designs', icon: <OutlineDribbble size={24} />, label: 'Dribbble' },
      { href: 'https://twitter.com/WhiteFoxDesign2', icon: <OutlineTwitter size={24} />, label: 'Twitter' },
      { href: 'https://www.instagram.com/whitefox.designs/', icon: <OutlineInstagram size={24} />, label: 'Instagram' },
   ]

   return (
      <footer className='w-full bg-primary-lighter'>
         <div className='max-w-6xl mx-auto px-4 py-10 md:py-20'>
            <div className='flex flex-wrap justify-center items-center'>
               {/* -mx-4 */}
               {/* Logo Section */}
               <section className='w-full sm:w-1/3 sm:mb-0 px-4 mb-8 flex justify-center'>
                  <Link
                     href='/en/'
                     className='flex items-cente'>
                     <SolidLogo
                        size={64}
                        //className='mr-3'
                     />

                     {/* <span className='self-center text-xl font-semibold whitespace-nowrap'>WhiteFox Designs</span> */}
                  </Link>
               </section>
               {/* Nav Section */}
               <section className='w-full sm:w-1/3 sm:mb-0 px-4 mb-8 flex justify-center'>
                  <ul className='list-none flex flex-col items-center sm:items-start'>
                     {navLinks.map((link) => (
                        <li key={link.title}>
                           <Link
                              href={link.href}
                              className='text-white-50 transition-colors hover:text-[#f48638]'>
                              {link.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </section>
               {/* Social Media Section */}
               <section className='w-full sm:w-1/3 px-4 flex justify-center'>
                  <div className='flex flex-col items-center min-sm:items-start'>
                     <h5 className='text-lg font-bold mb-2'>My Socials</h5>
                     <div className='flex items-center justify-center space-x-4'>
                        {socialLinks.map((social) => (
                           <Link
                              key={social.label}
                              href={social.href}
                              className='text-white-50 transition-colors hover:text-[#f48638]'
                              aria-label={social.label}>
                              {social.icon}
                           </Link>
                        ))}
                     </div>
                  </div>
               </section>
            </div>
         </div>

         {/* CopyRight */}
         <section className='text-center py-4'>
            <p className='text-white text-sm'> &#169; {new Date().getFullYear()} WhiteFox Designs - All rights reserved</p>
            <p className='text-white text-sm'>
               Made with ♥️ by{' '}
               <Link
                  target='_blank'
                  className='transition-colors underline underline-offset-2 hover:text-[#f48638]'
                  href={'https://twitter.com/Hasiradoo'}>
                  Poker Cats Creations
               </Link>
            </p>
         </section>
      </footer>
   )
}

export default Footer
