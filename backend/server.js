import express, { json } from 'express'
import fetch from 'node-fetch'
import 'dotenv/config'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())

// Function to fetch access token
async function fetchAccessToken() {
   try {
      const CLIENT_ID = process.env.CLIENT_ID
      const CLIENT_SECRET = process.env.CLIENT_SECRET

      const response = await fetch('https://www.deviantart.com/oauth2/token', {
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

      const data = await response.json()
      return data.access_token
   } catch (error) {
      console.error('Error fetching access token:', error)
      throw error
   }
}

// Function to fetch gallery images using the access token
async function fetchGalleryImages(accessToken) {
   const url = `https://www.deviantart.com/api/v1/oauth2/gallery/all?validate_token=8ac65cb108da3be985c0&validate_key=1704289296&username=whitefoxdesigns&calculate_size=false&ext_preload=true&limit=24&filter_empty_folder=true&with_session=true&mature_content=true`

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
      throw error
   }
}

// Endpoint that combines both fetching access token and gallery images
app.get('/fetchData', async (req, res) => {
   try {
      const accessToken = await fetchAccessToken()
      const galleryImages = await fetchGalleryImages(accessToken)
      res.json(galleryImages)
   } catch (error) {
      res.status(500).send('Server error')
   }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
})
