export const runtime = 'edge'

import Header from '@/components/organism/nav/Header'
import Gallery from '@/components/organism/Artwork'
import Footer from '../components/organism/nav/Footer'

export default function HomePage() {
   return (
      <div className='h-full container mx-auto'>
         {/* <h1>Gallery</h1> */}
         <Header />
         <Gallery />
         <Footer />
      </div>
   )
}
