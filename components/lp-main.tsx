import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { LpSample } from "./lp-sample";
import { LpStartup } from "./lp-startup";

export const LpMain = () => {
  return (
    <div className="bg-[url('/lp/polygon-bg.svg')] bg-cover bg-center">
      <div className="flex items-center justify-center flex-col gap-7 pt-10">
        <h1 className="text-primary text-center pt-10 text-2xl md:text-4xl lg:text-6xl font-bold">
          AI Architect
        </h1>
        <p className="text-center font-bold text-xl md:text-3xl max-w-[600px]">
          Transforme sua casa usando nossa IA para redesenhar seus ambientes
          internos.
        </p>

        <Link href="/dashboard">
          <Button>
            Iniciar
            <Image
              src="/lp/arrow.svg"
              alt=""
              width={24}
              height={24}
              className="flex items-center gap-1"
            />
          </Button>
        </Link>

        <LpSample />

        <LpStartup />
      </div>
    </div>
  );
};
