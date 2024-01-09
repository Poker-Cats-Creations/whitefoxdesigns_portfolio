export const runtime = 'edge'
import React from 'react'

import Gallery from '@/components/organism/Artwork'

export const metadata = {
   title: 'Home',
   description: 'StarOwl is a social media platform that allows you to connect with artists and creators.',
}

export default function HomePage() {
   return <Gallery />
}
