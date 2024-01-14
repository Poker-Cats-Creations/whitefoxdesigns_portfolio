import { revalidatePath } from 'next/cache'
import { fetchAccessToken } from '../getAccessToken/route'

export async function fetchGalleryImages(accessToken: string) {
   const url = `https://www.deviantart.com/api/v1/oauth2/user/profile/whitefoxdesigns`

   try {
      let data = await fetch(url, {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      })

      const response = await data.json()
      revalidatePath('/api/getDeviantArtUser')

      return Response.json(response)
   } catch (error) {
      console.error('Error fetching gallery images:', error)
      throw error
   }
}

export async function GET(request: Request) {
   let accessToken = await fetchAccessToken()
   let accessTokenData = await accessToken.json()

   let galleryImages = await fetchGalleryImages(accessTokenData)
   let galleryImagesData = await galleryImages.json()

   return Response.json(galleryImagesData)
}
