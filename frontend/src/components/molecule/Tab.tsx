import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../atom/Button'
import Link from 'next/link'

let tabs = [
   { id: 'home', label: 'Home', url: '/en/' },
   { id: 'about', label: 'About', url: '/en/about' },
   { id: 'tos', label: 'Terms of Service', url: '/en/tos' },
   { id: 'contant', label: 'Contant', url: '/en/contact' },
]

export default function AnimatedTabs() {
   let [activeTab, setActiveTab] = useState(tabs[0].id)

   return (
      <div className='flex space-x-1'>
         {tabs.map((tab) => (
            <Link
               key={tab.id}
               href={tab.url}>
               <Button
                  variant='empty'
                  size='xs'
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                  ${
                     activeTab === tab.id ? 'text-white-50' : 'text-white hover:text-white/60'
                  } relative rounded-full text-sm transition focus-visible:outline-2`}
                  style={{
                     WebkitTapHighlightColor: 'transparent',
                  }}>
                  {activeTab === tab.id && (
                     <motion.span
                        layoutId='bubble'
                        className='absolute inset-0 -z-10 bg-gradient-to-r from-[#e15459] to-[#f47750] rounded-full' //mix-blend-difference
                        //style={{ borderRadius: 9999 }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                  )}
                  {tab.label}
               </Button>
            </Link>
         ))}
      </div>
   )
}
