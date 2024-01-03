'use client'
import { ScrollShadow, Skeleton } from '@nextui-org/react'
import React from 'react'

export const Stories = () => {
   return (
      <section className='flex'>
         <ScrollShadow
            orientation='horizontal'
            className='flex h-56 w-max gap-4 rounded-2xl overflow-y-hidden'>
            {Array.from({ length: 1 }, (_, index) => (
               <div
                  key={index}
                  className='w-[150px] flex-shrink-0 items-center justify-center rounded-2xl bg-primary-lighter p-4 py-6'>
                  TODO: Stories feature
               </div>
            ))}
            {Array.from({ length: 4 }, (_, index) => (
               <Skeleton
                  key={index}
                  className='w-[150px] flex-shrink-0 items-center justify-center rounded-2xl !bg-primary-lighter p-4 py-6'
               />
            ))}
         </ScrollShadow>
      </section>
   )
}

export default Stories
