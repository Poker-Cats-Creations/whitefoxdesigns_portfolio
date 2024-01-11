import { revalidatePath } from 'next/cache'
import { fetchAccessToken, fetchGalleryImages } from './route'

export async function GET(request: Request) {
   try {
      //const page = parseInt(Request.page) || 0
      let accessToken = await fetchAccessToken()
      let galleryImages = await fetchGalleryImages(JSON.stringify(accessToken))
      Response.json(galleryImages)
   } catch (error) {
      Response.redirect('/', 500)
   }
}
