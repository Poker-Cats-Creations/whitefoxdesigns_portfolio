'use client'

import { contentData } from '@/app/tos/data'

function renderContentSection(sectionData) {
   return sectionData.map((item, index) => {
      switch (item.type) {
         case 'title':
            return (
               <h2
                  className='text-lg font-semibold text-white-50 uppercase'
                  key={index}>
                  {item.content}
               </h2>
            )
         case 'subtitle':
            return (
               <h3
                  className='font-semibold text-white-100'
                  key={index}>
                  {item.content}
               </h3>
            )
         case 'microtitle':
            return (
               <h4
                  className='font-semibold text-white-200'
                  key={index}>
                  {item.content}
               </h4>
            )
         case 'paragraph':
            return (
               <p
                  className='text-white-300'
                  key={index}>
                  {item.content}
               </p>
            )
         case 'list':
            return (
               <div key={index}>
                  <h5 className='font-semibold text-white-300'>{item.title}</h5>
                  <ul className='leading-none list-disc text-white-300'>
                     {item.items.map((listItem, listItemIndex) => (
                        <li key={`list-${listItemIndex}`}>{listItem}</li>
                     ))}
                  </ul>
               </div>
            )
         case 'note':
            return (
               <div
                  className='relative pl-6'
                  key={index}>
                  <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                     <p className='relative font-bold'>{item.content}</p>
                  </div>
               </div>
            )
         default:
            return null
      }
   })
}

export default function Tos() {
   return (
      <article className='prose-sm sm:prose-lg text-white-50 lg:prose-xl'>
         <header>
            <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-[#e15459] to-[#f47750] inline-block bg-clip-text'>
               Terms of Service
            </h1>
         </header>
         <section>{renderContentSection(contentData.Payment)}</section>

         <section>{renderContentSection(contentData.Cancellations_and_Refunds)}</section>

         <section>{renderContentSection(contentData.WorkProcess)}</section>
         <section>{renderContentSection(contentData.Please_Dont)}</section>
         <section>{renderContentSection(contentData.Service)}</section>
         <section>{renderContentSection(contentData.Commonly_asked_questions)}</section>
         <section className='text-center'>
            <h2 className='font-semibold'>
               For any questions please feel free to send me a note in deviantART or contact me through email or other social media.
            </h2>
         </section>
      </article>
   )
}
