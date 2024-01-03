export const runtime = 'edge'
import Gallery from '@/components/organism/Artwork'

export default function HomePage() {
   return (
      <div className='flex w-full flex-col bg-white-50'>
         {/* <h1>Gallery</h1> */}
         <Gallery />
      </div>
   )
}
