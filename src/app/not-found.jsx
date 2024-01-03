export const runtime = 'edge'
import React from 'react'
import CanvasSpace from '../lib/ConvasSpacev2'
import NotFound from '../components/template/NotFound'

export const metadata = {
   title: '404 - Not Found',
}

export default function Home() {
   return (
      <React.Fragment>
         <NotFound />
         <CanvasSpace
            count={750}
            speed={0.5}
            size={1.33}
            color='white'
         />
      </React.Fragment>
   )
}
