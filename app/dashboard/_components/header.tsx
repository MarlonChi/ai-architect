"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useContext } from "react";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={40} height={40} alt="" />
        <h2 className="font-bold text-lg">AI Architect</h2>
      </div>

      <Button variant="ghost" className="rounded-full text-primary">
        Compre mais créditos
      </Button>

      <div className="flex items-center gap-7">
        <div className="flex items-center gap-2 p-1 bg-slate-200 px-3 rounded-full">
          <Image src={"/star.png"} width={20} height={20} alt="" />
          <h2>{userDetail?.credits}</h2>
        </div>

        <UserButton />
      </div>
    </div>
  );
};
