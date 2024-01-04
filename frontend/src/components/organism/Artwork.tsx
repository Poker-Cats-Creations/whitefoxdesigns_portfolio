'use client'

import React, { useState, useEffect } from 'react'
import { Image } from '@nextui-org/image'
import { Skeleton } from '@nextui-org/skeleton'

export default function Gallery() {
   const [artworks, setArtworks] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const imagesResponse = await fetch(`http://localhost:8080/fetchData`)
            const imagesData = await imagesResponse.json()
            setArtworks(imagesData)
         } catch (error) {
            console.error('Error fetching data:', error)
         } finally {
            setIsLoading(false)
         }
      }

      fetchData()
   }, [])

   const skeletonPlaceholder = new Array(6).fill(0)

   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12'>
         {isLoading &&
            skeletonPlaceholder.map((_, index) => (
               <div
                  key={index}
                  className='flex flex-col items-center space-y-6'>
                  <Skeleton className='rounded-lg h-10 w-3/4' />
                  <Skeleton className='rounded-2xl h-60 w-full' />
               </div>
            ))}

         {!isLoading && artworks.length === 0 && <div className='no-images-container'>No images to display.</div>}

         {!isLoading &&
            artworks.map((image) => (
               <div
                  key={image.deviationid}
                  className='flex flex-col items-center space-y-6'>
                  <h2 className='text-2xl font-semibold'>{image.title}</h2>
                  <div className='outline-dashed outline-offset-1 outline-2 outline-slate-800 rounded-2xl'>
                     <Image
                        isZoomed
                        width={image.preview.width}
                        height={image.preview.height}
                        alt={image.title}
                        src={image.preview.src}
                        className='opacity-1 max-w-full h-auto'
                        fallbackSrc={`https://via.placeholder.com/${image.preview.width}x${image.preview.height}`}
                     />
                  </div>
                  {/* <p className='text-sm mt-2'>Author: {image.author.username}</p> */}
               </div>
            ))}
      </div>
   )
}
