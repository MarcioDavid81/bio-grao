import React from 'react'
import ServicesCard from './_components/services-card'

export const metadata = {
  title: "Serviços",
}

export default function Services() {
  return (
    <div className='flex items-center justify-center py-10 h-full'>
      <ServicesCard />
    </div>

  )
}
