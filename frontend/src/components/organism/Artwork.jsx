'use client'

import React, { useState, useEffect } from 'react'
import { Image } from '@nextui-org/image'
import { Skeleton } from '@nextui-org/skeleton'
//import { Pagination, PaginationItem, PaginationCursor } from '@nextui-org/pagination'
import Link from 'next/link'
import { Button } from '../atom/Button'

export default function Gallery() {
   const [artworks, setArtworks] = useState([])
   const [userInfo, setUserInfo] = useState({})
   const [userStats, setUserStats] = useState({})
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
            const imagesResponse = await fetch(`/api/getDevinatArtGallery?page=${currentPage - 1}`)
            const { has_more, next_offset, results } = await imagesResponse.json()
            setArtworks(results)
            //setHasMore(has_more)
            //has_more ? setAvailablePages((prevPages) => prevPages + 1) : setAvailablePages(currentPage)

            const userResponse = await fetch(`/api/getDeviantArtUser`)
            const { user, stats } = await userResponse.json()
            setUserInfo(user)
            setUserStats(stats)
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
                     <div className='relaitve overflow-hidden group flex justify-center outline-dashed outline-offset-1 outline-2 outline-primary-badge rounded-2xl hover:outline-[#f48638] transition-all cursor-pointer'>
                        <Image
                           classNames={{
                              img: 'cover bg-origin-border group-hover:opacity-20',
                           }}
                           quality={10}
                           sizes='100vw'
                           alt={image.title}
                           src={image.preview.src}
                           className='opacity-1 h-auto w-full'
                        />
                        <h2 className='absolute z-10 bottom-4 text-lg translate-y-4 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none'>
                           {image.title}
                        </h2>
                     </div>
                  </Link>
               ))}
         </div>
      </div>
   )
}
