'use client'
import { Skeleton } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Post = () => {
   const router = useRouter()
   return (
      <React.Fragment>
         {Array.from({ length: 1 }, (_, index) => (
            <section
               key={index}
               className='flex cursor-pointer h-24 items-center justify-center rounded-2xl bg-primary-lighter p-4 py-6'
               onClick={() => router.push('/en/post/postId')}>
               TODO: Posts feature
            </section>
         ))}

         {Array.from({ length: 9 }, (_, index) => (
            <Skeleton
               key={index}
               className='flex h-72 items-center justify-center rounded-2xl !bg-primary-lighter p-4 py-6'
            />
         ))}
      </React.Fragment>
   )
}

export default Post
