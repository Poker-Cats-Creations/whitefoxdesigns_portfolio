export default async function getAccessToken() {
   const clientId = process.env.CLIENT_ID
   const clientSecret = process.env.CLIENT_SECRET

   const response = await fetch('https://www.deviantart.com/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
         client_id: clientId,
         client_secret: clientSecret,
         grant_type: 'client_credentials',
      }),
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
   })

   const data = await response.json()
   return data
}

// try {
//    const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.deviantart.com/oauth2/token', {
//       method: 'POST',
//       body: new URLSearchParams({
//          client_id: clientId,
//          client_secret: clientSecret,
//          grant_type: 'client_credentials',
//       }),
//       headers: {
//          'Content-Type': 'application/x-www-form-urlencoded',
//       },
//    })

//    const data = await response.json()
//    res.status(200).json(data)
//    return data
// } catch (error) {
//    res.status(500).json({ message: 'Błąd serwera', error: error.toString() })
// }

export async function fetchGalleryImages(accessToken) {
   const url = 'https://www.deviantart.com/api/v1/oauth2/gallery/all'

   const response = await fetch(url, {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${accessToken}`,
      },
   })

   const data = await response.json()
   return data.results
   // try {
   //    const response = await fetch(url, {
   //       method: 'GET',
   //       headers: {
   //          Authorization: `Bearer ${accessToken}`,
   //       },
   //    })

   //    const data = await response.json()
   //    return data.results // Zakładając, że odpowiedź API zawiera pole 'results'
   // } catch (error) {
   //    console.error('Błąd podczas pobierania obrazów:', error)
   //    return []
   // }
}
