import { Price } from "@/app/types/price";
import { format } from "date-fns";
import React from "react";
import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type PricesListProps = {
  prices: Price[];
};

export default function PriceList({ prices }: PricesListProps) {
  const today = new Date();
  const formattedDate = format(today, "dd/MM/yyyy");

  return (
    <div className="bg-black text-white overflow-hidden py-0">
      <div className="container flex mx-auto space-x-20 text-sm gap-10">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          gradient={true}
          gradientWidth={2}
          gradientColor="lime"
          className="rounded-full"
        >
          <h2 className="ml-10">Cotações de hoje {formattedDate}</h2>
          {prices.map((price) => (
            <div
              key={price.product}
              className="flex items-center space-x-2 whitespace-nowrap"
            >
              <h2 className="ml-10">{price.product}:</h2>
              <span className="text-primary">
                {formatCurrency(price.price)}
              </span>
            </div>
          ))}
          <span>
            <Asterisk size={20} className="ml-10" />
          </span>
        </Marquee>
      </div>
    </div>
  );
}
