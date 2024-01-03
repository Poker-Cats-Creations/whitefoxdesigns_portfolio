'use client'

import React from 'react'
import { getAccessToken, fetchGalleryImages } from '@/app/api/route'
import { Image } from '@nextui-org/image'

const Gallery = async () => {
   const accessToken = await getAccessToken()
   const artworksData = await fetchGalleryImages(accessToken)

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {artworksData?.map((artwork) => (
               <div
                  key={artwork.deviationid}
                  className='flex flex-col items-center space-y-6'>
                  <h2 className='text-2xl font-semibold'>{artwork.title}</h2>
                  <Image
                     isZoomed
                     width={artwork.preview.width}
                     height={artwork.preview.height}
                     alt={artwork.title}
                     src={artwork.preview.src}
                     className='opacity-1 max-w-full h-auto'
                     fallbackSrc={`https://via.placeholder.com/${artwork.preview.width}x${artwork.preview.height}`}
                  />

                  {/* <p className='text-sm mt-2'>Author: {artwork.author.username}</p> */}
               </div>
            ))}
         </div>
      </div>
   )
}

export default Gallery
