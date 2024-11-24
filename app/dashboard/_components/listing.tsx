"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

import { Button } from "@/components/ui/button";
import { EmptyState } from "./empty-state";
import { db } from "@/config/db";
import { AiGeneratedImage } from "@/config/schema";
import { RoomItem } from "./room-item";

export interface RoomDetails {
  id: number;
  aiImage: string;
  designType: string;
  orgImage: string;
  roomType: string;
  userEmail: string | null;
}

export const Listing = () => {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState<RoomDetails[]>([]);

  useEffect(() => {
    const GetUserRoomList = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const result = await db
          .select()
          .from(AiGeneratedImage)
          .where(
            eq(
              AiGeneratedImage.userEmail,
              user.primaryEmailAddress.emailAddress
            )
          );

        setUserRoomList(result);
      }
    };

    GetUserRoomList();
  }, [user]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Olá, {user?.fullName}</h2>
        <Link href={"/dashboard/create-new"}>
          <Button>+ Remodelar ambiente</Button>
        </Link>
      </div>

      {userRoomList.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-10">
          <h2 className="font-medium text-primary text-2xl mb-8">Galeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRoomList.map((room: RoomDetails) => (
              <RoomItem key={room.id} room={room} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
