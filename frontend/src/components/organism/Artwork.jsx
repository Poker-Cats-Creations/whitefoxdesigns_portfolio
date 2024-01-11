'use client'

import React, { useState, useEffect } from 'react'
import { Image } from '@nextui-org/image'
import { Skeleton } from '@nextui-org/skeleton'
//import { Pagination, PaginationItem, PaginationCursor } from '@nextui-org/pagination'
import Link from 'next/link'
import { Button } from '../atom/Button'

export default function Gallery() {
   const [artworks, setArtworks] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [currentPage, setCurrentPage] = useState(1)
   //const [hasMore, setHasMore] = useState(true)
   //const [availablePages, setAvailablePages] = useState(1)

   useEffect(() => {
      // const fetchAllPages = async () => {
      //    let keepFetching = true
      //    let offset = 0
      //    let allData = []

      //    while (keepFetching) {
      //       const response = await fetchGalleryImages(accessToken, offset)
      //       allData = [...allData, ...response.results]

      //       if (response.has_more && response.next_offset) {
      //          offset = response.next_offset
      //       } else {
      //          keepFetching = false
      //       }
      //    }

      //    return allData
      // }

      const fetchData = async () => {
         try {
            //const imagesResponse = await fetch(`http://localhost:8080/fetchData?page=${currentPage - 1}`)
            const imagesResponse = await fetch(`/api?page=${currentPage - 1}`)
            const { has_more, next_offset, results } = await imagesResponse.json()
            //setHasMore(has_more)
            setArtworks(results)
            revalidatePath('/')
            //has_more ? setAvailablePages((prevPages) => prevPages + 1) : setAvailablePages(currentPage)
         } catch (error) {
            console.error('Error fetching data:', error)
         } finally {
            setIsLoading(false)
         }
      }

      fetchData()
   }, [currentPage])

   const skeletonPlaceholder = new Array(9).fill(0)

   return (
      <div className='flex flex-col items-center justify-center gap-6'>
         <h1 className='text-4xl font-bold mb-10'>Portfolio</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {isLoading &&
               skeletonPlaceholder.map((_, index) => (
                  <div
                     key={index}
                     className='relative flex flex-col items-center space-y-6'>
                     {/* <Skeleton className='rounded-lg h-10 w-3/4' /> */}
                     <Skeleton className='rounded-2xl h-56 w-64' />
                  </div>
               ))}

            {!isLoading && artworks.length === 0 && <div className='no-images-container'>No images to display.</div>}

            {!isLoading &&
               artworks.map((image) => (
                  <Link
                     href={image.url}
                     target='_blank'
                     key={image.deviationid}
                     className='relative flex flex-col items-center space-y-6'>
                     {/* <h2 className='text-lg font-semibold'>{image.title}</h2> */}
                     <div className='relaitve overflow-hidden group flex justify-center outline-dashed outline-offset-1 outline-2 outline-primary-badge rounded-2xl hover:outline-[#f48638] transition-all cursor-pointer'>
                        <Image
                           classNames={{
                              img: 'object-center bg-origin-border group-hover:opacity-20', //object-none
                           }}
                           //isZoomed
                           width={image.preview.width}
                           height={image.preview.height}
                           alt={image.title}
                           src={image.preview.src}
                           className='opacity-1 max-w-full h-auto'
                           //fallbackSrc={`https://via.placeholder.com/${image.preview.width}x${image.preview.height}`}
                        />
                        <h2 className='absolute z-10 bottom-4 text-lg translate-y-4 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none'>
                           {image.title}
                        </h2>
                     </div>
                     {/* <p className='text-sm mt-2'>Author: {image.author.username}</p> */}
                  </Link>
               ))}
         </div>
         <Button variant='ghost'>More on DeviantArt</Button>
         {/* <Pagination
            total={availablePages}
            initialPage={1}
            showControls
            onChange={(page) => setCurrentPage(page)}
         /> */}
      </div>
   )
}
