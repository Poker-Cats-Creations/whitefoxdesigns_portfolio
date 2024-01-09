'use client'

import AnimatedTabs from '@/components/molecule/Tab'
import { SolidLogo } from '@/icons/Icons'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

function useBoundedScroll(threshold: number) {
   let { scrollY } = useScroll()
   let scrollYBounded = useMotionValue(0)
   let scrollYBoundedProgress = useTransform(scrollYBounded, [0, threshold], [0, 1])

   useEffect(() => {
      return scrollY.on('change', (current) => {
         let previous = scrollY.getPrevious()
         let diff = current - previous
         let newScrollYBounded = scrollYBounded.get() + diff

         scrollYBounded.set(clamp(newScrollYBounded, 0, threshold))
      })
   }, [threshold, scrollY, scrollYBounded])

   return { scrollYBounded, scrollYBoundedProgress }
}

export default function Header() {
   let { scrollYBoundedProgress } = useBoundedScroll(200)
   let scrollYBoundedProgressDelayed = useTransform(scrollYBoundedProgress, [0, 0.75, 1], [0, 0, 1])

   return (
      // <div className='mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600'>
      //    <div className='z-0 flex-1 overflow-y-scroll'>
      <motion.header
         style={{
            height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [96, 64]),
            //backgroundColor: useMotionTemplate`hsl(222, 25%, 10.8% / ${useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.8])})`,
         }}
         className='fixed inset-x-0 flex z-50 h-full shadow backdrop-blur-md bg-primary-lighter/80'>
         <motion.div
            style={{
               paddingTop: useMotionTemplate`${useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0])}rem`,
               paddingBottom: useMotionTemplate`${useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0])}rem`,
            }}
            className={`mx-auto flex w-full max-w-6xl items-center justify-between h-max px-6`}>
            <motion.div
               style={{
                  scale: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.8]),
               }}
               className='flex origin-left items-center text-xl font-semibold uppercase'>
               <Link
                  className='text-lg text-white-50 hover:text-[#f48638] hover:opacity-100'
                  href='/en'>
                  <SolidLogo
                     size={64}
                     className='text-white-50'
                  />
               </Link>
            </motion.div>
            <motion.nav
               // style={{
               //    opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0]),
               // }}
               className='flex space-x-4 text-sm font-medium text-slate-400'>
               <AnimatedTabs />
               {/* <ul className='flex space-x-6'>
                  <li>
                     {' '}
                     <Link
                        color='foreground'
                        className='text-base text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'
                        href='/en/'>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        color='foreground'
                        className='text-base text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'
                        href='/en/about'>
                        About Me
                     </Link>
                  </li>
                  <li>
                     <Link
                        href='/en/tos'
                        // aria-current='page'
                        className='text-base text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'>
                        Terms of Service
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='text-base text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'
                        href='/en/contact'>
                        Contact
                     </Link>
                  </li>
               </ul> */}
            </motion.nav>
         </motion.div>
      </motion.header>
      //    </div>
      // </div>
   )
}

let clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max)
