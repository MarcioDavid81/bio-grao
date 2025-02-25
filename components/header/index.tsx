"use client";

import Link from "next/link";
import logo from "../../public/logoB.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Sobre",
    url: "/about",
  },
  {
    name: "Serviços",
    url: "/services",
  },
  {
    name: "Notícias",
    url: "/news",
  },
];

export default function Header() {
  // USESTATE E USEEFFCT PARA CAPTURAR O SCROLL DA PÁGINA E ADICIONAR UMA CLASSE NO HEADER
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //CONSTANTE PARA PEGAR O PATHNAME DA PÁGINA
  const path = usePathname();

  // USESTATE PARA CONTROLAR O ESTADO DO MENU MOBILE
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  useEffect(() => {
    setIsMenuMobileOpen(false);
  }, [path]);

  // IMPEDE O SCROOL DA PÁGINA QUANDO O MENU MOBILE ESTIVER ABERTO
  useEffect(() => {
    document.body.style.overflow = isMenuMobileOpen ? "hidden" : "auto";
  }, [isMenuMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-primary sm:bg-transparent transition-all duration-300
        ${scrolled ? "md:bg-secondary md:shadow-md" : ""}`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={140} height={340} />
        </Link>
        {/* ALTERA O ÍCONE DO MENU DE ACORDO COM O ESTADO */}
        {isMenuMobileOpen ? (
          <IoClose
            onClick={() => setIsMenuMobileOpen(false)}
            size={40}
            className="text-primary cursor-pointer hidden max-md:block z-30"
          />
        ) : (
          <IoMenu
            size={40}
            className="text-secondary cursor-pointer hidden max-md:block z-10"
            onClick={() => setIsMenuMobileOpen(true)}
          />
        )}
        {/* DIV CEGA PARA CRIAR O EFEITO DE OPACIDADE DO BODY */}
        {isMenuMobileOpen && (
          <div
            className="fixed inset-0 bg-primary bg-opacity-75 top-0 z-[9]"
            data-open={isMenuMobileOpen}
            onClick={() => setIsMenuMobileOpen(false)}
          />
        )}
        {/* MENU DESKTOP */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6 text-xl font-Exo text-white">
            {pages.map((page) => (
              <li
                key={page.url}
                className="hover:scale-105 transition-all duration-300"
              >
                <a
                  href={page.url}
                  className={`${
                    path === page.url ? "text-primary" : ""
                  } hover:text-primary`}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* MENU MOBILE */}
        <nav
          className={`fixed right-0 bg-secondary/100 top-0 w-[70%] h-screen z-20 transform transition-transform duration-300 ${
            isMenuMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setIsMenuMobileOpen(false)}
        >
          <ul className="flex flex-col items-start justify-start h-full gap-6 pl-4 pt-20 text-xl font-Exo text-white">
            {pages.map((page) => (
              <li key={page.url}>
                <a
                  href={page.url}
                  className={`${path === page.url ? "text-primary" : ""}`}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
