import { formatCurrency } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react'
import Marquee from 'react-fast-marquee';

interface PriceProps {
    moeda: string;
    nome: string;
    compra: number;
    venda: number;
    fechoAnterior: number;
}


export async function getPrices() {
    try {
      const res = await fetch("https://br.dolarapi.com/v1/cotacoes", {
        next: { revalidate: 3600 }, // Cache de 1 hora
      });
  
      if (!res.ok) {
        throw new Error(`Falha na requisição: ${res.statusText}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Erro ao buscar preços:", error);
      return null; // Retorna `null` para evitar quebra no front-end
    }
  }


  export default async function GetPrices() {
    const moedas = await getPrices();
  
    if (!moedas || moedas.length === 0) {
      return (
        <div className="text-white text-center">
          <p>⚠️ Não foi possível carregar as cotações no momento.</p>
        </div>
      );
    }
  
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
                {moedas.map((moeda: PriceProps) => {
                  const variacao = moeda.compra - moeda.fechoAnterior;
                  const percentual = (variacao / moeda.fechoAnterior) * 100;
                  const isPositive = percentual >= 0;
                  return (
                    <div key={moeda.moeda} className="flex flex-row gap-2 mx-4 text-white text-sm">
                      <p>{moeda.nome}:</p>
                      <p>Atual: {formatCurrency(moeda.compra)}</p>
                      <p>Anterior: {formatCurrency(moeda.fechoAnterior)}</p>
                      <p>Variação: {formatCurrency(variacao)}</p>
                      <p className={isPositive ? "text-primary flex items-center" : "text-red-400 flex items-center"}>
                        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />} {percentual.toFixed(2)}%
                      </p>
                    </div>
                  );
                })}
              </Marquee>
          </div>
      </div>
    );
  }
