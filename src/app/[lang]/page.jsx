export const runtime = 'edge'
import Post from '@/components/organism/post/Index'
import Stories from '@/components/organism/stories/Index'
import React from 'react'

export const metadata = {
   title: 'Home',
   description: 'StarOwl is a social media platform that allows you to connect with artists and creators.',
}

export default function Home() {
   return (
      <React.Fragment>
         <section className='flex -z-10'>
            <Stories />
         </section>
         {/* <section className='flex flex-col gap-6 rounded-2xl bg-primary-lighter p-4'>
				<CreatePost />
			</section> */}
         <Post />
      </React.Fragment>
   )
}
