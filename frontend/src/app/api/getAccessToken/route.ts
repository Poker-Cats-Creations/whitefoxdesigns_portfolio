export async function POST(req: Request) {
   const url = 'https://www.deviantart.com/oauth2/token'

   const response = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams({
         client_id: process.env.CLIENT_ID,
         client_secret: process.env.CLIENT_SECRET,
         grant_type: 'client_credentials',
      }),
   })

   const data = await response.json()
   return new Response(data.access_token)

   // const body = await req.json()

   // return new Response(JSON.stringify({}))
}
