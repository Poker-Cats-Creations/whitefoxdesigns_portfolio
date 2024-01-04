export const runtime = 'edge'
import Header from '@/components/organism/nav/Header'

export default function HomePage() {
   return (
      <div className='h-full container mx-auto'>
         {/* <h1>Gallery</h1> */}
         <Header />
      </div>
   )
}
