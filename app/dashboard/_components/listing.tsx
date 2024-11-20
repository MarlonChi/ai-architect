"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { EmptyState } from "./empty-state";

export const Listing = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Olá, {user?.fullName}</h2>
        <Link href={"/dashboard/create-new"}>
          <Button>+ Remodelar Cômodo</Button>
        </Link>
      </div>

      {userRoomList.length === 0 ? <EmptyState /> : <div></div>}
    </div>
  );
};
