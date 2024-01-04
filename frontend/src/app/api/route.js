//const dev = 'https://cors-anywhere.herokuapp.com/'

async function getAccessToken() {
   const url = `https://www.deviantart.com/oauth2/token`

   const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
         client_id: process.env.CLIENT_ID,
         client_secret: process.env.CLIENT_SECRET,
         grant_type: 'client_credentials',
      }),
   })

   const data = await response.json()
   return data.access_token
}

async function fetchGalleryImages(accessToken) {
   const url = `https://www.deviantart.com/api/v1/oauth2/gallery/all?validate_token=8ac65cb108da3be985c0&validate_key=1704289296&username=whitefoxdesigns&calculate_size=false&ext_preload=true&filter_empty_folder=true&with_session=true&mature_content=true`

   // try {
   const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
         Authorization: `Bearer ${accessToken}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
   })

   const data = await response.json()
   return data.results
   // } catch (error) {
   //    console.error('Error fetching gallery images:', error)
   //    return []
   // }
}

export { getAccessToken, fetchGalleryImages }
