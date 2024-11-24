"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CreditsOptions {
  credits: number;
  amount: number;
}

const BuyCredits = () => {
  const creditsOption: CreditsOptions[] = [
    {
      credits: 5,
      amount: 5.8,
    },
    {
      credits: 10,
      amount: 11,
    },
    {
      credits: 25,
      amount: 23.2,
    },
    {
      credits: 50,
      amount: 46,
    },
    {
      credits: 100,
      amount: 58,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<CreditsOptions | null>(
    null
  );

  return (
    <div>
      <h2 className="font-bold text-2xl">Compre mais créditos</h2>
      <p>
        Desbloqueie mais possibilidades - Compre mais créditos e transforme seus
        comodos, com a nossa IA! ✨🛋️
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10">
        {creditsOption.map((item: CreditsOptions, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 justify-center items-center border rounded-xl p-5 ${
              selectedOption?.credits === item.credits && "border-primary"
            }`}
          >
            <h2 className="font-bold text-3xl">{item.credits}</h2>
            <h2 className="font-medium text-xl">Créditos</h2>

            <Button className="w-full" onClick={() => setSelectedOption(item)}>
              Selecionar
            </Button>
            <h2 className="font-medium text-primary text-xl">
              {item.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredits;
