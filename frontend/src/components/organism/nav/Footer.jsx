import React from 'react'
import { OutlineHome, SolidLogo } from '@/icons/Icons'
import Link from 'next/link'

import { OutlineTwitter, OutlineInstagram, OutlineDribbble } from '@/icons/Icons'
import { Button } from '@/components/atom/Button'

const Footer = () => {
   // const navLinks = [
   //    { href: '/', title: 'Home' },
   //    { href: '/about', title: 'About Me' },
   //    { href: '/tos', title: 'Term of Service' },
   //    { href: '/contact', title: 'Contact' },
   // ]

   const socialLinks = [
      {
         href: 'https://dribbble.com/Whitefox_Designs',
         icon: (
            <OutlineDribbble
               size={24}
               className={'transition-colors text-white hover:text-[#EA4C89]'}
            />
         ),
         label: 'Dribbble',
      },
      {
         href: 'https://twitter.com/WhiteFoxDesign2',
         icon: (
            <OutlineTwitter
               size={24}
               className={'transition-colors text-white hover:text-[#1DA1F2]'}
            />
         ),
         label: 'Twitter',
      },
      {
         href: 'https://www.instagram.com/whitefox.designs/',
         icon: (
            <OutlineInstagram
               size={24}
               className={'transition-colors text-white hover:text-[#E1306C]'}
            />
         ),
         label: 'Instagram',
      },
   ]

   return (
      <footer className='max-w-6xl mx-auto px-6'>
         {/*w-full p-8 */}
         <div className='py-6 bg-primary-lighter rounded-2xl'>
            <div className='flex flex-wrap justify-center items-bottom'>
               {/* -mx-4 */}
               {/* Logo Section */}
               <section className='w-full px-4 mb-8 flex justify-center sm:w-1/3 sm:mb-0'>
                  <div className='flex flex-col items-center min-sm:items-start'>
                     <Link
                        href='/'
                        className='flex items-cente'>
                        <SolidLogo
                           size={64}
                           //className='mr-3'
                        />

                        {/* <span className='self-center text-xl font-semibold whitespace-nowrap'>WhiteFox Designs</span> */}
                     </Link>
                  </div>
               </section>
               {/* Nav Section */}
               <section className='w-full sm:w-1/3 sm:mb-0 px-4 mb-8 flex justify-center'>
                  <div className='flex flex-col items-start min-sm:items-start'>
                     <div className='flex flex-col items-center min-sm:items-start'>
                        <h5 className='text-lg font-bold mb-2'>My Socials</h5>
                        <div className='flex items-center justify-center space-x-4'>
                           {socialLinks.map((social) => (
                              <Link
                                 key={social.label}
                                 href={social.href}
                                 aria-label={social.label}>
                                 {social.icon}
                              </Link>
                           ))}
                        </div>
                     </div>
                     {/* <h5 className='text-lg font-bold mb-2'>Links</h5>
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
                     </ul> */}
                  </div>
               </section>
               {/* Social Media Section */}
               <section className='w-full mb-8 sm:mb-0 sm:w-1/3 px-4 flex flex-col space-y-6 justify-center'>
                  <div className='flex flex-col items-center min-sm:items-start'>
                     <h5 className='text-lg font-bold mb-2'>Contact</h5>
                     <div className='flex items-center justify-center space-x-4'>
                        <div className='flex items-center gap-2 p-2 bg-primary-dark rounded-full bg-gradient-to-r from-[#e15459] to-[#f47750]'>
                           <span className='mx-4'>Commisson Me</span>
                           <Button
                              rounded
                              size='xs'>
                              WIP
                              <OutlineTwitter size={24} />
                           </Button>
                        </div>
                        {/* <Button
                           variant='outline'
                           rounded>
                           Button
                        </Button> */}
                        {/* <Link
                           href={'mailto:commissions@whitefoxdesigns.net'}
                           className='link-gradient'>
                           commissions@whitefoxdesigns.net
                        </Link> */}
                     </div>
                  </div>
               </section>
            </div>
            <section className='text-center py-4'>
               <p className='text-white text-sm'> &#169; {new Date().getFullYear()} WhiteFox Designs - All rights reserved</p>
               <p className='text-white text-sm'>
                  Made with ♥️ by
                  <Link
                     target='_blank'
                     className='link-gradient mx-1'
                     href={'https://twitter.com/Hasiradoo'}>
                     Poker Cats Creations
                  </Link>
               </p>
            </section>
         </div>
         {/* CopyRight */}
      </footer>
   )
}

export default Footer
