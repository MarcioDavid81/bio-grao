import Banner from '@/components/banner'
import MarqueeBanner from '@/components/marquee'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='flex items-center justify-center py-10 h-full'>
      <Banner />
    </div>
    <div className='flex items-center justify-center py-10 h-full'>
      <MarqueeBanner />
    </div>
    </>
  )
}