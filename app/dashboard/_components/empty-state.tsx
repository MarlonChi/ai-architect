"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const EmptyState = () => {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <Image src={"/placeholder.png"} width={200} height={200} alt="" />
      <h2 className="font-medium text-xl text-gray-500">
        Crie um novo AI Design para seu ambiente
      </h2>
      <Link href={"/dashboard/create-new"} className="mt-10">
        <Button>Começar</Button>
      </Link>
    </div>
  );
};
