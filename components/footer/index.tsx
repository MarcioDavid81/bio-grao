import { MailIcon, PhoneCallIcon, PinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiaWhatsapp } from "react-icons/lia";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[url(/bgfooter.png)] bg-cover md:bg-center h-full sm:h-[300px] pt-4">
        <div className="container flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 mx-auto py-2 text-gray-900">
          <div className="flex flex-col justify-between items-center sm:items-start ">
            <Image
              src="/logoB.png"
              alt="Logo Bio Grão"
              width={200}
              height={200}
            />
            <h3 className="font-bold text-xl mb-5">
              BioGrão Comércio de Cereais LTDA
            </h3>
            <p className="flex items-center gap-2">
              <MailIcon size={14} />
              contato@biograo.com.br
            </p>
            <span className="flex items-center gap-2">
              <PhoneCallIcon size={14} />
              (55) 3272-0100
            </span>
            <span className="flex items-center gap-2">
              <LiaWhatsapp size={16} />
              (55) 99700-0100
            </span>
            <span className="flex items-center gap-2">
              <PinIcon size={14} />
              Rodovia TU-040, km 75 Jari - RS
            </span>
          </div>
          <div className=" flex flex-col items-center md:items-start mt-2">
            <h3 className="font-bold text-xl mb-5">Horário de Atendimento</h3>
            <span>Segunda a Sexta</span>
            <span className="block">Das 08:00 às 12:00</span>
            <span>Das 13:30 às 18:00</span>
            <span className="block">Sábados até às 12:00</span>
          </div>
          <div className="flex flex-col items-center md:items-start mt-2">
            <h3 className="font-bold text-xl mb-5">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/biograo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/biograo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-secondary text-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center">
            <div>
              <p className="text-xs sm:text-sm">{`© ${year} All rights reserved.`}</p>
            </div>
            <div>
              <a href="http://localhost:3000/privacy-politic" className="text-xs sm:text-sm">
                Políticas de Privacidade
              </a>
            </div>
            <div>
              <p className="text-xs sm:text-sm">
                Made by |{" "}
                <a
                  href="https://md-webdeveloper.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marcio David - Web Developer
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
