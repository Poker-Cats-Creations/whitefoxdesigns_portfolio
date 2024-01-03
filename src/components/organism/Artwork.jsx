'use client'

import React, { useState, useEffect } from 'react'
import { getAccessToken, fetchGalleryImages } from '@/app/api/route'
import Image from 'next/image'

const Gallery = () => {
   const [artworks, setArtworks] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const accessToken = await getAccessToken()
            console.log(accessToken)
            const artworksData = await fetchGalleryImages(accessToken)
            setArtworks(artworksData || [])
         } catch (error) {
            console.error('Wystąpił błąd podczas pobierania danych:', error)
         }
      }

      fetchData()
   }, [])

   return (
      <div>
         {artworks.length > 0 ? (
            artworks.map((artwork) => (
               <Artwork
                  key={artwork.id}
                  image={artwork}
               />
            ))
         ) : (
            <p>Brak obrazów do wyświetlenia.</p>
         )}
      </div>
   )
}

const Artwork = ({ image }) => {
   return (
      <div>
         <Image
            src={image.url}
            alt={image.title}
         />
         <h3>{image.title}</h3>
      </div>
   )
}

export default Gallery
