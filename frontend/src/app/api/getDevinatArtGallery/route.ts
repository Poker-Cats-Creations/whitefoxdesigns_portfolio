import { revalidatePath } from 'next/cache'
import { fetchAccessToken } from '../getAccessToken/route'

export async function fetchGalleryImages(accessToken: string, offset: number = 0, limit: number = 9, Json: boolean) {
   const actualOffset = offset * 9

   const url = `https://www.deviantart.com/api/v1/oauth2/gallery?validate_token=8ac65cb108da3be985c0&validate_key=1704289296&username=whitefoxdesigns&ext_preload=true&limit=${limit}&offset=${actualOffset}&filter_empty_folder=true&with_session=true&mature_content=true`

   try {
      let data = await fetch(url, {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      })

      const response = await data.json()
      revalidatePath('/api/getDevinatArtGallery')

      if (Json) {
         return Response.json(response)
      } else {
         return response
      }
   } catch (error) {
      console.error('Error fetching gallery images:', error)
      throw error
   }
}

export async function GET(request: Request) {
   let accessToken = await fetchAccessToken()
   let accessTokenData = await accessToken.json()

   let galleryImages = await fetchGalleryImages(accessTokenData, 0, 9, true)
   let galleryImagesData = await galleryImages.json()

   return Response.json(galleryImagesData)
}
