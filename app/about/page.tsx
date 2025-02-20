import React from 'react'
import AboutCard from './_components/about-card';

export const metadata = {
  title: "Sobre",
}

export default function About() {
  return (
    <div className='flex items-center justify-center py-10 h-full'>
      <AboutCard />
    </div>
  )
}
