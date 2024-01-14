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
