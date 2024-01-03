'use client'

import React, { useState, useEffect } from 'react'
import { Image } from '@nextui-org/image'
import { getAccessToken, fetchGalleryImages } from '@/app/api/route'

export default function Gallery() {
   const [artworks, setArtworks] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      const fetchToken = async () => await getAccessToken()

      const fetchArtworks = async (accessToken: string) => fetchGalleryImages(accessToken)

      const fetchAndSetData = async () => {
         const accessToken = await fetchToken()
         console.log(accessToken)

         if (accessToken) {
            const artworkResults = await fetchGalleryImages(accessToken)
            setArtworks(artworkResults.results)
         } else {
            setIsLoading(false)
         }
      }

      fetchAndSetData()
   }, [])

   useEffect(() => {
      console.log('Updated artworks:', artworks)
   }, [artworks])

   if (isLoading) {
      return <div>Loading data...</div>
   }

   if (artworks.length === 0) {
      return <div>No images to display.</div>
   }

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {artworks.map((image) => (
               <div
                  key={image.deviationid}
                  className='flex flex-col items-center space-y-6'>
                  <h2 className='text-2xl font-semibold'>{image.title}</h2>
                  <Image
                     isZoomed
                     width={image.preview.width}
                     height={image.preview.height}
                     alt={image.title}
                     src={image.preview.src}
                     className='opacity-1 max-w-full h-auto'
                     fallbackSrc={`https://via.placeholder.com/${image.preview.width}x${image.preview.height}`}
                  />

                  {/* <p className='text-sm mt-2'>Author: {artwork.author.username}</p> */}
               </div>
            ))}
         </div>
      </div>
   )
}
