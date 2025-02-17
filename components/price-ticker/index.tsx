import { ArrowDown, ArrowUp } from 'lucide-react'
import React from 'react'

export default function PriceTicker() {
  return (
    <div className="bg-black/80 text-white p-0 overflow-hidden mt-[72px]">
    <div className="container flex mx-auto space-x-20  animate-scroll">
      <div className="flex items-center gap-2">
        <h1>Soja</h1>
        <span className="text-md font-light text-red-600">R$ 124,00</span>
        <span className="text-md font-light text-red-600">-4,38%</span>
        <ArrowDown className='text-red-600' size={18} />
      </div>
      <div className="flex items-center gap-2">
        <h1>Milho</h1>
        <span className="text-md font-light text-primary">R$ 70,00</span>
        <span className="text-md font-light text-primary">2,04%</span>
        <ArrowUp className='text-primary' size={18} />
      </div>
      <div className="flex items-center gap-2">
        <h1>Trigo</h1>
        <span className="text-md font-light text-primary">R$ 66,00</span>
        <span className="text-md font-light text-primary">1,23%</span>
        <ArrowUp className='text-primary' size={18} />
      </div>
    </div>
  </div>
  )
}
