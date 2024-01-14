'use client'

import { Button } from '@/components/atom/Button'
import AnimatedTabs from '@/components/molecule/Tab'
import { OutlineClose, OutlineMenu, SolidLogo } from '@/icons/Icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   let pathname = usePathname()

   return (
      <React.Fragment>
         <header className='fixed inset-x-0 flex z-50 shadow backdrop-blur-md bg-primary-lighter/80'>
            <div className={`mx-auto flex w-full max-w-6xl items-center justify-between h-max px-6 py-4 z-10`}>
               <div className='flex origin-left items-center text-xl font-semibold uppercase'>
                  <Link
                     className='text-lg text-white-50 hover:text-[#f48638] hover:opacity-100'
                     href='/en'>
                     <SolidLogo
                        size={64}
                        className='text-white-50'
                     />
                  </Link>
               </div>
               <nav className='flex sm:hidden'>
                  <Button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     variant='ghost'
                     size='sm-icon'>
                     {!isMenuOpen ? <OutlineMenu size={24} /> : <OutlineClose size={24} />}
                  </Button>
               </nav>
               <nav className='space-x-4 text-sm font-medium text-slate-400 hidden sm:flex'>
                  <AnimatedTabs />
               </nav>
            </div>
            <motion.nav
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -100 }}
               transition={{ type: 'linear', stiffness: 260, damping: 0 }}
               className={`absolute ${isMenuOpen ? 'flex' : 'hidden'} pt-32 w-full h-screen bg-primary-dark/90 backdrop-blur-lg`}>
               <ul className='px-6 space-y-3'>
                  <li>
                     <Link
                        href='/'
                        className={`${pathname === '/' && 'link-gradient'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href='/tos'
                        className={`${pathname === '/tos' && 'link-gradient'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        Terms of Service
                     </Link>
                  </li>
                  <li>
                     <Link
                        href='/contact'
                        className={`${pathname === '/contact' && 'link-gradient'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        Contact
                     </Link>
                  </li>
               </ul>
            </motion.nav>
         </header>
      </React.Fragment>
   )
}

let clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max)
