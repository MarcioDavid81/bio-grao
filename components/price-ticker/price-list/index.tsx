import { Price } from "@/app/types/price";
import { format } from "date-fns";
import React from "react";

type PricesListProps = {
  prices: Price[];
};

export default function PriceList({ prices }: PricesListProps) {
    
  const getCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="bg-black text-white overflow-hidden mt-[72px] py-0">
      <div className="container flex mx-auto space-x-20 animate-scroll text-sm">
        {prices.map((price) => (
          <div
            key={price.product}
            className="flex items-center space-x-2 whitespace-nowrap gap-2"
          >
            <h2>{price.product}:</h2>
            <span className="text-primary">
              {getCurrency.format(price.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
