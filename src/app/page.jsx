export const runtime = 'edge'
import Gallery from '@/components/organism/Artwork'

function loadJSONP(url, callback) {
   const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random())
   window[callbackName] = function (data) {
      delete window[callbackName]
      document.body.removeChild(script)
      callback(data)
   }

   const script = document.createElement('script')
   script.src = `${url}${url.includes('?') ? '&' : '?'}callback=${callbackName}`
   document.body.appendChild(script)
}

export default function HomePage({ artworks }) {
   return (
      <div>
         <h1>Galeria DeviantArt</h1>
         <Gallery />
      </div>
   )
}
