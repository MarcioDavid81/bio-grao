import React from 'react'
import Marquee from "react-fast-marquee";
import Or from '../../public/marquee/or.png'
import Brasmax from '../../public/marquee/bmx.png'
import Dekalb from '../../public/marquee/dkb.png'
import Basf from '../../public/marquee/basf.png'
import Sthil from '../../public/marquee/sthil.png'
import Syngenta from '../../public/marquee/syngenta.png'
import Image from 'next/image';
import SectionTitle from '../section-title';

export default function MarqueeBanner() {
  return (
    <section className=" container mx-auto px-4 py-12">
        <SectionTitle title="Parceiros" subtitle="o que há de melhor" />
        <Marquee autoFill={true} pauseOnHover={true} className='flex items-center justify-between py-10 h-full'>
            <Image src={Or} alt="Or Melhoramento Genético" width={50} height={100} className='sm:w-[100px]' />
            <Image src={Brasmax} alt="Brasmax Genético" width={50} height={100} className='sm:w-[100px]' />
            <Image src={Dekalb} alt="Dekalb Sementes" width={50} height={100} className='sm:w-[100px]' />
            <Image src={Basf} alt="Basf" width={50} height={100} className='sm:w-[100px]' />
            <Image src={Sthil} alt="Sthil" width={50} height={100} className='ml-2 mr-5 sm:w-[100px]' />
            <Image src={Syngenta} alt="Syngenta" width={50} height={100} className='sm:w-[100px]' />
        </Marquee>
    </section>
  )
}
