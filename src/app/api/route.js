async function getAccessToken() {
   const url = 'https://www.deviantart.com/oauth2/token'

   try {
      const response = await fetch(url, {
         method: 'POST',
         body: new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'client_credentials',
         }),
      })

      const data = await response.json()
      return data.access_token
   } catch (error) {
      console.error('Error fetching access token:', error)
      throw new Error('Server error')
   }
}

async function fetchGalleryImages(accessToken) {
   const url = `https://www.deviantart.com/api/v1/oauth2/gallery/all?validate_token=8ac65cb108da3be985c0&validate_key=1704289296&username=whitefoxdesigns&calculate_size=false&ext_preload=true&filter_empty_folder=true&with_session=true&mature_content=true`

   try {
      const response = await fetch(url, {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      })

      const data = await response.json()
      return data.results
   } catch (error) {
      console.error('Error fetching gallery images:', error)
      return []
   }
}

export { getAccessToken, fetchGalleryImages }
