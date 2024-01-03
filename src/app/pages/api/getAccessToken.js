export default async function handler(req, res) {
   if (req.method !== 'POST') {
      return res.status(405).end()
   }

   const url = 'https://www.deviantart.com/oauth2/token'
   try {
      const response = await fetch(url, {
         method: 'POST',
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
      res.status(200).json(data)
   } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.toString() })
   }
}
