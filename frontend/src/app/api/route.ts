import { revalidatePath } from 'next/cache'

export async function fetchAccessToken() {
   try {
      const CLIENT_ID = process.env.CLIENT_ID
      const CLIENT_SECRET = process.env.CLIENT_SECRET

      let data = await fetch('https://www.deviantart.com/oauth2/token', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials',
         }),
      })

      let response = await data.json()
      return Response.json(response.access_token)
   } catch (error) {
      console.error('Error fetching access token:', error)
      throw error
   }
}

export async function fetchGalleryImages(accessToken: string, offset: number = 0) {
   const actualOffset = offset * 9

   const url = `https://www.deviantart.com/api/v1/oauth2/gallery?validate_token=8ac65cb108da3be985c0&validate_key=1704289296&username=whitefoxdesigns&ext_preload=true&limit=9&offset=${actualOffset}&filter_empty_folder=true&with_session=true&mature_content=true`

   try {
      let data = await fetch(url, {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      })

      const response = await data.json()
      revalidatePath('/api')
      return Response.json(response)
   } catch (error) {
      console.error('Error fetching gallery images:', error)
      throw error
   }
}

export async function GET(request: Request) {
   //const page = parseInt(Request.page) || 0
   let accessToken = await fetchAccessToken()
   let accessTokenData = await accessToken.json()

   let galleryImages = await fetchGalleryImages(accessTokenData)
   let galleryImagesData = await galleryImages.json()

   return Response.json(galleryImagesData)
}
