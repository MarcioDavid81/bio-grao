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
        <Marquee autoFill={true} pauseOnHover={true} className='flex items-center justify-center py-10 gap-10 h-full'>
            <Image src={Or} alt="Or Melhoramento Genético" width={200} height={100} />
            <Image src={Brasmax} alt="Brasmax Genético" width={200} height={100} />
            <Image src={Dekalb} alt="Dekalb Sementes" width={200} height={100} />
            <Image src={Basf} alt="Basf" width={200} height={100} />
            <Image src={Sthil} alt="Sthil" width={200} height={100} />
            <Image src={Syngenta} alt="Syngenta" width={200} height={100} />
        </Marquee>
    </section>
  )
}
