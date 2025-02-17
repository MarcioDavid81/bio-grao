import { ArrowDown, ArrowUp } from 'lucide-react'
import React from 'react'

const prices = [
    {
        name: "Soja",
        price: "R$ 124,00",
        percent: "-4,38%",
    },
    {
        name: "Milho",
        price: "R$ 70,00",
        percent: "2,04%",
    },
    {
        name: "Trigo",
        price: "R$ 66,00",
        percent: "1,23%",
    },
]

interface Price {
    name: string;
    price: string;
    percent: string;
}

export default function PriceTicker({name, price, percent}: Price) {

  return (
    <div className="bg-black/80 text-white overflow-hidden mt-[72px]">
    <div className="container flex mx-auto space-x-20 animate-scroll">
        {prices.map((price) => (
            <div className="flex items-center space-x-2 whitespace-nowrap gap-2">
                <h1>{price.name}:</h1>
                <span className={`${price.percent.includes('-') ? 'text-red-600' : 'text-green-600'}`}>{price.price}</span>
                <span className={`${price.percent.includes('-') ? 'text-red-600' : 'text-green-600'}`}>{price.percent}</span>
                {price.percent.includes('-') ? <ArrowDown className='text-red-600' size={18} /> : <ArrowUp className='text-green-600' size={18} />}
            </div>
        ))}

    </div>
  </div>
  )
}
