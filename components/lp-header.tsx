import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export const LpHeader = () => {
  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <Link href="/dashboard">
        <div className="flex gap-2 items-center">
          <Image src={"/logo.svg"} width={40} height={40} alt="" />
          <h2 className="font-bold text-lg">AI Architect</h2>
        </div>
      </Link>

      <Link href="/dashboard">
        <Button>Iniciar</Button>
      </Link>
    </div>
  );
};
