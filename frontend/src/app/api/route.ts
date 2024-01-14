// import { revalidatePath } from 'next/cache'
// import { fetchAccessToken } from './getAccessToken/route'
// import { fetchGalleryImages } from './getDevinatArtGallery/route'

// export async function fetchTotalNumberOfArts() {
//    let offset = 0
//    let totalCount = 0
//    const limit = 24

//    while (true) {
//       let accessToken = await fetchAccessToken()
//       let accessTokenData = await accessToken.json()
//       let data = await fetchGalleryImages(accessTokenData, offset, limit, false)

//       totalCount += data.results.length

//       if (!data.has_more) {
//          break
//       }

//       offset = offset += limit
//    }

//    revalidatePath('/api')

//    return totalCount
// }

// export async function GET(request: Request) {
//    let totalArtsCount = await fetchTotalNumberOfArts()

//    return Response.json({ totalArtsCount })
// }
