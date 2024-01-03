/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   env: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
   },
   typescript: {
      ignoreBuildErrors: true,
   },
   async headers() {
      return [
         {
            source: '/(.*)',
            headers: [
               { key: 'Access-Control-Allow-Credentials', value: 'true' },
               { key: 'Access-Control-Allow-Origin', value: '*' },
               { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
               {
                  key: 'Access-Control-Allow-Headers',
                  value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
               },
            ],
         },
      ]
   },
}

module.exports = nextConfig
