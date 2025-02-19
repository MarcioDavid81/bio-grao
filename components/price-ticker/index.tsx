import React from "react";
import PriceList from "./price-list";
import { Prices } from "@/app/types/price";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";


const getPriceData = async (): Promise<Prices> => {
  const query = `
    query MyQuery {
     prices {
        date
        product
        price
    }
}
`;
  return fetchHygraphQuery(
    query,
    60
  );
};

export default async function PriceTicker() {
  const { prices } = await getPriceData();

  return (
    <>
      <PriceList prices={prices} />
    </>
  );
}
