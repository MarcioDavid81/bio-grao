import React from "react";
import { Button } from "../ui/button";
import SectionTitle from "../section-title";
import Divider from "../divider";
import { Section } from "lucide-react";
import PriceTicker from "../price-ticker";
import GetPrices from "../get-prices";

const cultivares = [
  {
    product: "Soja",
    image: "https://images.unsplash.com/photo-1696124651786-218e47e63c73",
    industry: "BRASMAX GENÉTICA",
    url: "https://www.brasmaxgenetica.com.br/",
  },
  {
    product: "Milho",
    image: "https://images.unsplash.com/photo-1706685137907-7cdbc2bb7e48",
    industry: "DEKALB SEMENTES",
    url: "https://www.agro.bayer.com.br/marcas/dekalb",
  },
  {
    product: "Trigo",
    image: "https://images.unsplash.com/photo-1719763455813-d9a46ddddff8",
    industry: "OR MELHORAMENTO GENÉTICO",
    url: "https://www.orsementes.com.br/",
  },
];

export default function Banner() {
  return (
    <section className=" container mx-auto px-4 py-12">
      <SectionTitle title="Sementes" subtitle="o que há de melhor" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {cultivares.map((cultivar, index) => (
          <div key={index} className="p-5 mx-auto sm:p-10 md:p-2 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src={cultivar.image}
                alt={`Lavoura de ${cultivar.product}`}
                className="w-full h-60 sm:h-96 dark:bg-gray-500"
              />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href={cultivar.url}
                    target="_blank"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                  >
                    As melhores cultivares de {cultivar.product}, para levar a
                    sua produtividade para o topo!
                  </a>
                  <p className=" flex gap-2 text-xs dark:text-gray-600">
                    By:
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={cultivar.url}
                      className="text-xs hover:underline"
                    >
                      {cultivar.industry}
                    </a>
                  </p>
                </div>
                <div className="dark:text-gray-800">
                  <Button className="w-full" asChild>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fale com nosso time
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <SectionTitle title="Cotações" subtitle="acompanhe o mercado em tempo real" />
      <div className="my-10">
        <PriceTicker />
        <GetPrices />
      </div>
      <Divider />
    </section>
  );
}
