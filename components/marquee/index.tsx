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
import Adama from '../../public/marquee/adama.png';
import Ihara from '../../public/marquee/ihara.png';
import Mosaic from '../../public/marquee/mosaic.png';
import Nortox from '../../public/marquee/nortox.png';
import Piratini from '../../public/marquee/piratini.png';
import UPL from '../../public/marquee/upl.png';

const images = [
  { src: Or, alt: "Or Melhoramento Genético" },
  { src: Brasmax, alt: "Brasmax Genético" },
  { src: Dekalb, alt: "Dekalb Sementes" },
  { src: Basf, alt: "Basf" },
  { src: Sthil, alt: "Sthil" },
  { src: Syngenta, alt: "Syngenta" },
  { src: Adama, alt: "Adama" },
  { src: Ihara, alt: "Ihara" },
  { src: Mosaic, alt: "Mosaic" },
  { src: Nortox, alt: "Nortox" },
  { src: Piratini, alt: "Piratini" },
  { src: UPL, alt: "UPL" },
]

export default function MarqueeBanner() {
  return (
    <section className=" container mx-auto px-4 py-12">
        <SectionTitle title="Parceiros" subtitle="o que há de melhor" />
        <Marquee autoFill={true} pauseOnHover={true} className='flex items-center justify-between py-10 h-full'>
            {images.map((image, index) => (
                <div key={index} className='mx-4'>
                    <Image src={image.src} alt={image.alt} width={100} height={50} />
                </div>
            ))}
        </Marquee>
    </section>
  )
}
