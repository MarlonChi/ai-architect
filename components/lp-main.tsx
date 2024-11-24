import Link from "next/link";
import { Button } from "./ui/button";
import { LpSample } from "./lp-sample";

export const LpMain = () => {
  return (
    <div className="h-screen bg-[url('/lp/polygon-bg.svg')] bg-cover bg-center">
      <div className="flex items-center justify-center flex-col gap-7 pt-10">
        <h1 className="text-center pt-10 text-4xl font-bold">AI Architect</h1>
        <p className="text-center text-primary text-2xl">
          Transforme sua casa usando nossa IA
        </p>

        <Link href="/dashboard">
          <Button>Iniciar</Button>
        </Link>

        <LpSample />
      </div>
    </div>
  );
};
