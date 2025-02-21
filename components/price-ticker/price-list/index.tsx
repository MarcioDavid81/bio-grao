import { Price } from "@/app/types/price";
import { format } from "date-fns";
import React from "react";
import Marquee from "react-fast-marquee";

type PricesListProps = {
  prices: Price[];
};

export default function PriceList({ prices }: PricesListProps) {
    
  const getCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const today = new Date();
  const formattedDate = format(today, "dd/MM/yyyy");

  return (
    <div className="bg-black text-white overflow-hidden mt-[72px] py-0">
      <div className="container flex mx-auto space-x-20 text-sm gap-10">
        <Marquee autoFill={true} pauseOnHover={true} gradient={true} gradientWidth={2} gradientColor="lime" className="rounded-full" >
        <h2 className="ml-10">Cotações de hoje {formattedDate}</h2>
        {prices.map((price) => (
          <div
            key={price.product}
            className="flex items-center space-x-2 whitespace-nowrap"
          >
            <h2 className="ml-10">{price.product}:</h2>
            <span className="text-primary">
              {getCurrency.format(price.price)}
            </span>
          </div>
        ))}
        </Marquee>
      </div>
    </div>
  );
}
