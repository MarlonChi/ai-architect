"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export const EmptyState = () => {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <Image src={"/placeholder.png"} width={200} height={200} alt="" />
      <h2 className="font-medium text-xl text-gray-500">
        Crie um novo AI Design para seu cômodo
      </h2>
      <Button>Começar</Button>
    </div>
  );
};
